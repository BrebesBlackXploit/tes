let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085640431004]
│ • Dana-Gopay-Ovo [085640431004]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^ds|donasi$/i

module.exports = handler
