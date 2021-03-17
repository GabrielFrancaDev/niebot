const config = require('../config.json');
const commands = require('../scripts/commandsReader')(config.prefix);

const descriptions = {
    "/ajuda": "mostra todos os comandos disponiveis",
    "/debug": "comando de testes do dev",
    "/escolha": "escolhe entre os argumentos dados",
    "/esquizofreniaoff": "desliga a esquizofrenia",
    "/esquizofreniaon": "liga a esquizofrenia",
    "/genero": "diz o gênero que você deveria ter (base cientifica)",
    "/jogodavelha": "inicia uma partida de jogo da velha",
    "/objection": "OBJECTION!",
    "/roletarussa": "éhhhhh....",
    "/ship": "sHipPa duas pessoas"
}

module.exports = async (client, msg) =>{
    var texto = 'Comandos: ```'
    Object.keys(commands).forEach(command =>{
        texto += `\n ${command}: ${descriptions[command] ? descriptions[command] : 'sem descrição'} \n`
    })
    msg.reply(texto + '```')
}