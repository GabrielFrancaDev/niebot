module.exports = async (client, msg) =>{
    var msgargs = msg.content.split(/ +/g);
    console.log(msgargs)
    var p1 = msg.author.username;
    var p2 = msgargs[1];
    msg.channel.send(`jogador 1 > ${p1}; jogador 2 > ${p2}`)
}