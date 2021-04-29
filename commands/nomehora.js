const ms = require('ms')

module.exports = async (client, msg) =>{
    var nick = msg.content.split(' ')[1];
    msg.member.setNickname(nick)
    
    setTimeout(function (){
        msg.member.setNickname('')
    }, ms('12s'))
}