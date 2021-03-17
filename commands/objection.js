const Discord = require('discord.js');
const Canvas = require('canvas');

module.exports = async (client, msg) =>{
    const member = msg.author;

	const channel = msg.channel;
	if (!channel) return;

	const canvas = Canvas.createCanvas(1240, 612);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./imagens/objection.png');
	ctx.drawImage(background, -70, 0, 984, 612);

    const text = await Canvas.loadImage('./imagens/objectiontext.png');
	ctx.drawImage(text, 560, 100, 339*2, 239*2);

	const avatar = await Canvas.loadImage(member.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 245, 15, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	msg.channel.send(attachment);
    msg.delete();
}