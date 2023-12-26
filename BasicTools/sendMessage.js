const fs = require('fs')
const path = require('path')
const {loadMessage, jsonTohtml, saveMessage} = require('./loadMessage')


const sendMessage = (id, messagedata)=>{
    obj = loadMessage(id)
    obj.push(JSON.parse(messagedata))
    saveMessage(id, obj)

}

const checkifsame = (id, messagehtml)=>{
    obj = loadMessage(id)
    return jsonTohtml(obj) == messagehtml
}

module.exports = {sendMessage}