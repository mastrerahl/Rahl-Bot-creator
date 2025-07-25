const { default: makeWASocket, useSingleFileAuthState, DisconnectReason } = require("@whiskeysockets/baileys");
const { Boom } = require("@hapi/boom");
const figlet = require("figlet");
const chalk = require("chalk");
const fs = require("fs");
const path = require("path");
const P = require("pino");
const config = require("./config");

// Auth state
const { state, saveState } = useSingleFileAuthState('./session/auth.json');

// Load plugins
const plugins = {};
fs.readdirSync("./plugins").forEach((file) => {
  if (file.endsWith(".js")) {
    const command = file.replace(".js", "");
    plugins[command] = require(`./plugins/${file}`);
  }
});

// Print banner
console.log(chalk.cyan(figlet.textSync("RAHL BOT", { horizontalLayout: "full" })));
console.log(chalk.green("⚡ Starting bot..."));

async function startBot() {
  const sock = makeWASocket({
    logger: P({ level: "silent" }),
    auth: state,
    printQRInTerminal: true,
  });

  sock.ev.on("creds.update", saveState);

  sock.ev.on("messages.upsert", async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;

    const from = msg.key.remoteJid;
    const type = Object.keys(msg.message)[0];
    const text = msg.message?.conversation || msg.message[type]?.text || "";

    if (!text.startsWith(config.botPrefix)) return;

    const command = text.slice(1).split(" ")[0].toLowerCase();
    const args = text.trim().split(" ").slice(1);

    if (plugins[command]) {
      try {
        await plugins[command].run(sock, msg, args);
      } catch (err) {
        console.error(err);
        await sock.sendMessage(from, { text: "❌ Error executing command." });
      }
    }
  });

  sock.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === "close") {
      const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
      if (reason === DisconnectReason.loggedOut) {
        console.log("❌ Logged out.");
      } else {
        console.log("🔁 Reconnecting...");
        startBot();
      }
    }
  });
}

startBot();
