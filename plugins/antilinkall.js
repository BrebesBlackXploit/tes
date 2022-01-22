let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Format salah! Contoh :*\n\n	*○ ${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
	} else if(args[0] == 'on') {
		let cek = global.DATABASE._data.chats[m.chat].nolinkallall
	if(cek) return conn.reply(m.chat, `*Anti-link all telah aktif pada grup ini.*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].nolinkall = true
		conn.reply(m.chat, `*Anti-link all berhasil diaktifkan.*`, m)
	} else if(args[0] == 'off') {
		let cek = global.DATABASE._data.chats[m.chat].nolinkall
	if(!cek) return conn.reply(m.chat, `*Anti-link all telah di nonaktifkan pada grup ini.*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].nolinkall = false
		conn.reply(m.chat, `*Anti-link all berhasil di nonaktifkan.*`, m)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Format salah! Contoh :*\n\n	*○ ${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
	} 
}
handler.help = ['antilinkall *on / off*']
handler.tags = ['group']
handler.command = /^(antilinkall)$/i
handler.owner = false
handler.admin = true
handler.premium = false
handler.botAdmin = true
handler.exp = 0
handler.limit = false
module.exports = handler
