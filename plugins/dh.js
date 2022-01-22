let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `DH Hackbar New Version\nhttps://duit.cc/TpNR
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*ini bang*', 'status@broadcast')
}
handler.help = ['hackbar']
handler.tags = ['main']
handler.command = /^(hackbar|dh|dhhackbar)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
