let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*#WTS*\nReady domain dan hosting murah, untuk web/blog.\n• Nama domain? Bisa request\n━━━━━━━━━━━━━━━━━━━━━━━\nKunjungi: https://bbx-host.pw ━━━━━━━━━━━━━━━━━━━━━━━\n*🌐LIST DOMAIN MURAH🌐*\n• 🛍️.ASIA : 60K\n• 🛍️.BIZ: 70K\n• 🛍️.SPACE :45K\n• 🛍️.XYZ : 20K\n• 🛍️.MY.ID : 20K\n• 🛍️.TECH: 55K\n• 🛍️.SITE : 45K\n• 🛍️.STORE :55K\n• 🛍️.SHOP : 55K\n• 🛍️.SCH.ID : 70k\n• 🛍️.HOST : 60K\n• 🛍️.ONLINE: 30K\n• 🛍️.OR.ID :60K\n• 🛍️.VIP : 60K\n• 🛍️.WEBSITE : 40K\n*DLL*\n━━━━━━━━━━━━━━━━━━━━━━━\n\n\nWHM MINI: 30K\nWHM MEDIUM: 55K\nWHM SUPER: 70K\nWHM UNLIMITED: 90K\nMWHM UNLIMITED 120K
\nWHM ALPHA UNLIMITED: 170K\nWHM ROOT TRIAL LICENCE: 70K\nWHM ROOT VALID LICENCE: 300K\n\n🌐LIST CHEAP HOSTING🌐 \nWarrior:\n✅1 Domain\n✅1GB SSD Storage\n✅Unlimited Email\n✅Unlimited Bandwidth\n✅Unlimited Sub Domain\n✅Free Premium Theme & Plugin\n💰Price? 7k\n\nSoldiers:\n✅1 Domain\n✅2GB SSD Storage\n✅Unlimited Email\n✅Unlimited Bandwidth\n✅Unlimited Sub Domain\n✅Free Premium Theme & Plugin\n💰Price? 10k\n\nElite:\n✅1 Domain\n✅5GB SSD Storage\n✅Unlimited Email\n✅Unlimited Bandwidth\n✅Unlimited Sub Domain\n✅Free Premium Theme & Plugin\n💰Price? 12k\n\nMaster:\n✅1Domain\n✅10GB SSD Storage\n✅Unlimited Email\n✅Unlimited Bandwidth\n✅Unlimited Sub Domain\n✅Free Premium Theme & Plugin\n💰Price? 17k\n\n*🌀UNLIMITED HOSTING🌀*\n✅Unlimited Inode\n✅Unlimited Email\n✅Unlimited Domain\n✅Unlimited Bandwidth\n✅Unlimited SSD Storage\n✅Free Premium Theme & Plugin\n💰Price?\nMonthly 45k\nSemi-Annually 250k\nAnnually 485k {free domain}\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n• *🔒SUPPORT SSL*\n• *🚀 SERVER SPEED*\n━━━━━━━━━━━━━━━━━━━━━━━━\n*NOTE:*\nUntuk Server Luar Indonesia Harga Lebih Besar 9%\n\nPROMO:\nBELI UNLIMITED HOSTING 1TAHUN GRATIS DOMAIN MY.ID\n━━━━━━━━━━━━━━━━━━━━━━━\n*_💳PAYMENT:_*\n*GOPAY - OVO - PERFECT MONEY*\n\nMinat Hub : \nwa.me/6289636504839\nhttps://icq.im/Ctr.X\n\nOther Website\n_*https://zone-bbx.xyz*_\n\n#izinmin\n#bantushare
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Jgn lupa beli bang*', 'status@broadcast')
}
handler.help = ['domain']
handler.tags = ['main']
handler.command = /^(domain)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
