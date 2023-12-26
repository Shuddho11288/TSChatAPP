const simsimi = require('./commands/simsimi')
const ai = require('./commands/ai')
const help = require('./commands/help')
const prefix = '-'
const commands = { '-sim': async (message) => { return await simsimi.ask(message) }, '-help': async (message) => { return await help.generateHelpMessage() }, '-ai': async (message) => { return await ai.herc(message) } }
const noprefix = async (message) => {
    return await ai.herc(message)
}

const listen = async (message, localstorage = { sim: true }) => {

    message = decodeURIComponent(message)
    console.log(message)
    if (!message.startsWith(prefix)) {
        let res = await noprefix(message, localstorage)
        console.log(res + 'sus')
        return res
    }
    else if (Object.keys(commands).includes(message.split(' ')[0])) {
        return await commands[message.split(' ')[0]](message)
    }
    else {
        return 'Command ' + message.split(' ')[0] + ' not found'

    }
}

module.exports = {
    listen
}