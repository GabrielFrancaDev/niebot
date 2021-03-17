module.exports = async (client, msg) =>{
    var users = msg.mentions.users.array();
    if (users[0] && users){
        if (users[1]){
            var user1 = users[0].id.split('');
            var user2 = msg.mentions.users.first().id.split('');
        } else{
            var user2 = msg.author.id.split('');
            var user1 = msg.mentions.users.first().id.split('');
        }
        // 0.617283951
        var idcalc1 = (eval(user1.join('+'))-66) * 1.04166667;
        var idcalc2 = (eval(user2.join('+'))-66) * 1.04166667; 

        //eval(separada)*0.617283951
        var porcentagem = Math.round((idcalc1 + idcalc2)/2);
        var complemento = '';
        if(porcentagem < 30){
            complemento = 'sempre há chances...'
        } else if (porcentagem < 60){
            complemento = 'talvez...'
        } else if (porcentagem < 80){
            complemento = 'beeeem talvez em'
        } else {
            complemento = 'tá na hora do casamento'
        }
    msg.channel.send(`${porcentagem}% ${complemento}`)
    } else{
        msg.channel.send('mencione dois usuarios')
    }

    
}