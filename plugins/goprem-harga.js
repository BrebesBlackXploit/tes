let handler  = async (m, { conn, usedPrefix: _p }) => {
let prem = `
5k / 1 Minggu
10k / 1 Bulan
20k / Permanen`.trim()

conn.sendButton(m.chat, prem.trim(), 'Made With ❤ By RamaGans ID Ft ZeusXz', 'Gas chat owner', '.owner', { sendEphemeral: true, quoted: m })}

handler.command = /^(piro)$/i

module.exports = handler
