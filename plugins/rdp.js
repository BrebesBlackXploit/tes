let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
#WTS Ready VPS/RDP\n\nWindows 10\n1vCPU/1GB = 38.000\n1vCPU/3GB = 53.000\n2vCPU/4GB = 73.000\n2vCPU/8GB = 108.000\n2vCPU/16GB = 133.000\n4vCPU/8GB = 148.000\n4vCPU/16GB= 160.000\n4vCPU/32GB = 210.000\n\n\nWindows 2012\n1vCPU/1GB = 35k\n1vCPU/3.5GB=50k\n2vCPU/4GB = 70k\n2vCPU/8GB = 85k\n4vCPU/8GB = 105k\n4vCPU/16GB= 130k\n6vCPU/16GB = 150k\n6vCPU/32GB = not ready\n8vCPU/16GB = not ready\n8vCPU/32GB = 310k\n\n\nMINAT?\nwa.me/+62896-3650-4839\n\n#izinmin\n#share
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Jgn lupa beli bang*', 'status@broadcast')
}
handler.help = ['rdp']
handler.tags = ['main']
handler.command = /^(rdp)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
