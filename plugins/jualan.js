let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants, args }) => {
     const rows = [
        {title: 'Domain Dan Hosting', description: "cek", rowId:".domain"},
        {title: 'RDP, VPS', description: "cek", rowId:".rdp"},
        
    ]
    
    const sections = [{title: "Silahkan dipilih", rows: rows}]
    const button = {
        buttonText: 'press this',
        description: "Pencet bawah om",
        sections: sections,
        listType: 1
    }
    
    await conn.sendMessage(m.chat, button, MessageType.listMessage)
} 
handler.help = ['toko'] 
handler.tags = ['main']
handler.command = /^toko|tkk$/i
handler.owner = false
handler.mods = false
handler.premium = false

handler.private = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
