module.exports = async (client, msg) =>{
    var escolhas = msg.content.split(' ');
    var esc1 = escolhas[1];
    var esc2 = escolhas[2];
    var esc3 = escolhas[3];
    var esc4 = escolhas[4];

    if ((esc1 && esc2) && (!escolhas[5])){
        if (esc4){
            var ind = Math.floor(Math.random() * 4);
            var result = escolhas[ind+1];

        } else if(esc3){
            var ind = Math.floor(Math.random() * 3);
            var result = escolhas[ind+1];

        } else{
            var ind = Math.floor(Math.random() * 2);
            var result = escolhas[ind+1];
        }
        msg.reply(`eu escolho ${result}`)
    } else{
        msg.reply('esse comando precisa de 2/4 argumentos')
    }

}