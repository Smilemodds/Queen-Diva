const settings = require("../settings");
async function aliveCommand(sock, chatId, message) {
    try {
        const message1 = `*🤖 ❰❴ ⎈ＱＵＥＥＮ ＤＩＶＡ⎈ ❵❱  is Active!*\n\n` +
              
        await sock.sendMessage(chatId, {
            text: message1,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363407133888525@newsletter',
                    newsletterName: '❰❴ ⎈ＱＵＥＥＮ ＤＩＶＡ⎈ ❵❱',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' }, { quoted: message });
    }
}

module.exports = aliveCommand;