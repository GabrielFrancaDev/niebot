let animais = ['🐶','🐱','🐀','🐇','🐷','🐸','🐒']
let aniWin = 0;
let aniIndex = 1;

module.exports = async (client, msg) =>{
    if (aniIndex<animais.length){
    const message = await msg.reply('escolha um animal')
    message.react(animais[aniIndex])
        .then(() => message.react(animais[aniWin]))

    const filter = (reaction, user) =>{
       // msg.channel.send(['🐶','🐱'].includes(reaction.emoji.name) && user.id == msg.author.id)
        return [animais[aniWin], animais[aniIndex]].includes(reaction.emoji.name) && user.id == msg.author.id
    }
    
    message.awaitReactions(filter, { max: 1, time: 10000, errors: ['time']})
        .then(collected =>{
            const reaction = collected.first()

            
            msg.channel.send(reaction.emoji.name)
            aniIndex++;
            aniWin = animais.indexOf(reaction.emoji.name);
            //console.log(animais.indexOf(reaction.emoji.name))
            msg.channel.send(aniWin)

            message.delete()
            
        })
        .catch(collected=>{
            message.delete()
            msg.reply('você demorou muito para responder')
            
        })
        
   } else{
       msg.reply('chegou no final')
   }
}