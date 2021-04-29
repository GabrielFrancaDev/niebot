
module.exports = async (client, msg) =>{
    //let limite = msg.content.split([0])
    let qtd = msg.content.split(' ')[1]
    if(!qtd) return msg.reply('me diga a quantidade de mensagens')
    if(isNaN(qtd)) return msg.reply('preciso de um número')

    if(qtd < 1 || qtd > 100) return msg.reply('preciso de um número entre 1 e 100') 

    await msg.channel.messages.fetch({limit: qtd}).then(messages =>{
        msg.channel.bulkDelete(messages).catch(error => msg.reply(error))
        
    })
}