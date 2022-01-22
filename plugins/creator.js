let handler = function (m) {
  // this.sendContact(m.chat, '6285795431803', 'Andy', m)
  conn.sendContact(m.chat, '6289636504839', 'RamaGans ID', m)

conn.sendContact(m.chat, '6282125563461', 'ZeusXz', m)


}

handler.command = /^owner|creator$/i

module.exports = handler
