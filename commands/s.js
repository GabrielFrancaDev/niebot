const Discord = require('discord.js')
const prefix = '/';

module.exports = async (client, msg) =>{

    //let guild = client.guilds.get('serverID');
    let member = msg.guild.member(msg.author);
    let nickname = member ? member.displayName : null;    


    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#FFA500')
	.setTitle(msg.content.substr((prefix+"s").length))
	.setURL('https://discord.js.org/')
	.setAuthor('sugestão por ' + nickname)
    
    
    msg.channel.send(exampleEmbed);
}