import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//let handler = async(m, { conn, text, usedPrefix, command }) => {
//let pp = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image')

let str = `

┌─「 Donasi • Pulsa 」
│ • *Telkomsel:* [${global.ppulsa}]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Dana:* [${global.pdana}]
│ • *Gopay:* [${global.pgopay}]
│ • *Ovo:* [${global.povo}]
│ • *Link Aja:* [${global.plinkaja}]
❏────`
let wibu = `https://telegra.ph/file/5783d2c38bd289510c9a2.jpg` 
let thumb = await(await fetch(wibu)).buffer()
conn.send3ButtonDoc(m.chat, str, botdate,'Sewa Bot','.sewa','QR+PAYMENT','.donasi1','Menu','.menu', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "tautanwa",
    mediaType: "tautanwa",
    description: "https://www.facebook.com/profile.php?id=100083728134253", 
    title: 'Inory and Wahab',
    body: bottime,
    thumbnail: thumb,
    sourceUrl: syt
  }
  } }) 
          }
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler