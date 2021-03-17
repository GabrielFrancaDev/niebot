//#region bagulhetes
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')
const commands = require('./scripts/commandsReader')(config.prefix);
const verPermissao = require('./scripts/verPermissao')
//#endregion



client.on('ready', () => {
    console.log('vambora')
    client.user.setActivity('/ajuda', { type: 'LISTENING' });
})

client.on('message', msg =>{
    if(msg.author.bot || !msg.guild){
        return;
    }
    
    const args = msg.content.split(' ')
    if(commands[args[0]]){
        if(verPermissao(msg.member, args[0])){
            commands[args[0]](client, msg);
        } else msg.reply('você não tem permissão')
    }
    else if (msg.content.startsWith(config.prefix)) msg.channel.send('*i  d o n t  s p e a k  m a c a c o    u g a  b o o g a*')
})

client.on('guildMemberAdd', member =>{
    chatLog.send(`Seja bem vindA ao servidor, ${member.displayName}, o seu sacrificio nunca será esquecido`)
    member.roles.add(config.roleMember)
})
client.on('guildMemberRemove', member => {
    chatLog.send(`${member.displayName} saiu do servidor, é hora da caçada`)
})


client.login(config.token);