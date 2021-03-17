module.exports = async (client, msg) =>{
    var rip = Math.floor(Math.random() * 4)+1
    var num = Math.floor(Math.random() * 4)+1;
    msg.channel.send(`a bala está na ${rip}ª posição do tambor`)
    msg.channel.send(`deu...... ${num}`)
    if (rip == num){
        msg.reply('f');
    } else{
        msg.reply('gg familia')
    }
}