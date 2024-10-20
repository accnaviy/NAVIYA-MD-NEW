const config = require('../config')
const { cmd } = require('../command')
const { fetchJson } = require('../lib/functions')
let needus = "*Please provide a valid Facebook URL!*" 

//==========================================for button users==============================================

cmd({
    pattern: "facebook",    
    alias: ["fb","fbvideo","facebookdl"],
    react: '🌀',
    desc: "Download Facebook videos",
    category: "download",
    use: '.facebook < facebook url >',
    filename: __filename
},
async(conn, mek, m,{from, q, reply, prefix}) => {
    try{
        if (!q) return await reply('Please provide a Facebook video URL.') 
        if (!q.includes('facebook.com')) return await reply('Please provide a valid Facebook video URL.') 

        // Fetching video data from an API that supports Facebook video download
        const mov = await fetchJson(`https://dark-yasiya-api-new.vercel.app/download/facebook?url=${q}`)
        
        if (!mov.result) return await reply('Error fetching video.')

        let mala = `乂 *F A C E B O O K - D O W N L O A D E R*

    *◦ Title:* ${mov.result.title || 'No Title'}
`
        let buttons = [{
                name: 'single_select',
                buttonParamsJson: JSON.stringify({
                   title: 'Download Options',
                   sections: [{
                      rows: [{
                         title: 'DOWNLOAD VIDEO SD QUALITY',
                         id: prefix + `fbxdl ${mov.result.video_sd}`
                      }, {
                         title: 'DOWNLOAD VIDEO HD QUALITY',
                         id: prefix + `fbxdl ${mov.result.video_hd}`
                      }]
                   }]
                })
            }]

        let message = {
            image: mov.result.thumbnail,
            header: '',
            footer: config.FOOTER,
            body: mala
        }   
        return conn.sendButtonMessage(from, buttons, m, message) 

    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//==============================================================================

cmd({
    pattern: "fbxdl",
    react: '💫',
    dontAddCommandList: true,
    use: '.fbxdl <link>',
    filename: __filename
},
async(conn, mek, m,{from, q, reply}) => {
    try{
        if (!q) return await reply(needus)
        let wm = config.FOOTER
        await conn.sendMessage(from, { video: { url: q }, caption: wm}, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})
const config = require('../config')
const { cmd } = require('../command')
const { fetchJson } = require('../lib/functions')
let needus = "*Please provide a valid Facebook URL!*" 

//==========================================for button users==============================================

cmd({
    pattern: "facebook",    
    alias: ["fb","fbvideo","facebookdl"],
    react: '🌀',
    desc: "Download Facebook videos",
    category: "download",
    use: '.facebook < facebook url >',
    filename: __filename
},
async(conn, mek, m,{from, q, reply, prefix}) => {
    try{
        if (!q) return await reply('Please provide a Facebook video URL.') 
        if (!q.includes('facebook.com')) return await reply('Please provide a valid Facebook video URL.') 

        // Fetching video data from an API that supports Facebook video download
        const mov = await fetchJson(`https://dark-yasiya-api-new.vercel.app/download/facebook?url=${q}`)
        
        if (!mov.result) return await reply('Error fetching video.')

        let mala = `乂 *F A C E B O O K - D O W N L O A D E R*

    *◦ Title:* ${mov.result.title || 'No Title'}
`
        let buttons = [{
                name: 'single_select',
                buttonParamsJson: JSON.stringify({
                   title: 'Download Options',
                   sections: [{
                      rows: [{
                         title: 'DOWNLOAD VIDEO SD QUALITY',
                         id: prefix + `fbxdl ${mov.result.video_sd}`
                      }, {
                         title: 'DOWNLOAD VIDEO HD QUALITY',
                         id: prefix + `fbxdl ${mov.result.video_hd}`
                      }]
                   }]
                })
            }]

        let message = {
            image: mov.result.thumbnail,
            header: '',
            footer: config.FOOTER,
            body: mala
        }   
        return conn.sendButtonMessage(from, buttons, m, message) 

    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//==============================================================================

cmd({
    pattern: "fbxdl",
    react: '💫',
    dontAddCommandList: true,
    use: '.fbxdl <link>',
    filename: __filename
},
async(conn, mek, m,{from, q, reply}) => {
    try{
        if (!q) return await reply(needus)
        let wm = config.FOOTER
        await conn.sendMessage(from, { video: { url: q }, caption: wm}, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})