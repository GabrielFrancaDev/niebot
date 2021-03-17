module.exports = async (client, msg) =>{
    const message = await msg.reply('escolha uma fruta')
    message.react('🍉')
        .then(() => message.react('🍌'))
        .then(() => message.react('🍎'))

    const filter = (reaction, user) =>{
        return ['🍉', '🍌', '🍎'].includes(reaction.emoji.name) && user.id == msg.author.id
    }

    message.awaitReactions(filter, { max: 1, time: 10000, errors: ['time']})
        .then(collected =>{
            const reaction = collected.first()

            switch(reaction.emoji.name){
                case '🍉':
                    msg.reply('m e l a n c i a')
                break;
                case '🍌':
                    msg.reply('b a n a n a')
                break;
                case '🍎':
                    msg.reply('m a ç ã')
                break;
            }
            message.delete()
        })
        .catch(collected=>{
            message.delete()
            msg.reply('você demorou muito para responder')
        })
}