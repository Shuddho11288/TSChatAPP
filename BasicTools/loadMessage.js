const fs = require('fs')
const path = require('path')
const loadMessage = (id)=>{
    //console.log(path.resolve(__dirname,'../extension/database/chats.json'))
    let data = fs.readFileSync(path.resolve(__dirname,'../extension/database/chats.json'), 'utf8')
    //console.log(data)
    let obj = JSON.parse(data)
    return obj[id]
}

const saveMessage = (id, objs)=>{
    console.log(path.resolve(__dirname,'../extension/database/chats.json'))
    let data = fs.readFileSync(path.resolve(__dirname,'../extension/database/chats.json'), 'utf8')
    //console.log(data)
    let obj = JSON.parse(data)
    obj[id] = objs
    fs.writeFileSync(path.resolve(__dirname,'../extension/database/chats.json'), JSON.stringify(obj))
    
}
const jsonTohtml = (obj)=>{
    let html = ''
    for (let i = 0; i < obj.length; i++) {
        const data = obj[i];

        let template = `
        <div class="message-container" replyto="1703332891567" messageid="1703332891567"><div class="replyto-container">rmes</div><h3 class="sender-name">USER</h3><p class="message">cmes</p><span class="material-icons-outlined reply-icon replyButton"><i class="fa-solid fa-reply"></i></span></div>`
        template = template.replace('USER', data.name)
        data.replymessage!= undefined? template = template.replace('rmes', data.replymessage) : template = template.replace('<div class="replyto-container">rmes</div>', '')
        template = template.replace('1703332884819', data.timestamp)
        template = template.replace('cmes', data.message)
        
        html += template

    }
    return html

}

module.exports = {loadMessage, jsonTohtml, saveMessage}