module.exports = async (client, msg) =>{
    const message = await msg.reply('escolha uma fruta')
    message.react('๐')
        .then(() => message.react('๐'))
        .then(() => message.react('๐'))

    const filter = (reaction, user) =>{
        return ['๐', '๐', '๐'].includes(reaction.emoji.name) && user.id == msg.author.id
    }

    message.awaitReactions(filter, { max: 1, time: 10000, errors: ['time']})
        .then(collected =>{
            const reaction = collected.first()

            switch(reaction.emoji.name){
                case '๐':
                    msg.reply('m e l a n c i a')
                break;
                case '๐':
                    msg.reply('b a n a n a')
                break;
                case '๐':
                    msg.reply('m a รง รฃ')
                break;
            }
            message.delete()
        })
        .catch(collected=>{
            message.delete()
            msg.reply('vocรช demorou muito para responder')
        })
}