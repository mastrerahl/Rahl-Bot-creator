const config = require("../config");

module.exports = {
  run: async (sock, msg) => {
    const from = msg.key.remoteJid;
    const menuText = `
╭───「 🤖 *RAHL BOT MENU* 」
│
│ 🧠 *Bot By:* ${config.ownerName}
│ 🛠️ *Hosted By:* ${config.hostedBy}
│ 🧾 *Prefix:* ${config.botPrefix}
│
│ 📜 Commands:
│ • .menu - Show this menu
│ • .about - Bot info
│ • .ping - Check uptime
│
╰───────────────`;
    await sock.sendMessage(from, { text: menuText }, { quoted: msg });
  }
};
