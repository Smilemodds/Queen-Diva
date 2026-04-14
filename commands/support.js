const text = userMessage.toLowerCase();

if (text.startsWith('.support')) {
    await sock.sendMessage(chatId, {
        text: `
╭━━━〔 👑 𝚀𝚄𝙴𝙴𝙽 𝙳𝙸𝚅𝙰 𝚂𝚄𝙿𝙿𝙾𝚁𝚃 〕━━━╮

👤 𝙾𝚆𝙽𝙴𝚁 : Mr Smile  
📞 𝙲𝙾𝙽𝚃𝙰𝙲𝚃 : https://wa.me/97125567072  

🎥 𝚈𝙾𝚄𝚃𝚄𝙱𝙴
➤ https://www.youtube.com/@MrSmile_modders

📢 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿
➤ https://whatsapp.com/channel/0029Vb794NKBadmdwkPN6i0B

╰━━━〔 ⚡ 𝙀𝙇𝙄𝙏𝙀 𝙎𝙐𝙋𝙋𝙊𝙍𝙏 〕━━━╯
`
    });
}
