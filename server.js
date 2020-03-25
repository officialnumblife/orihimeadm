const express = require('express');
const http = require('http');
const app = express();
// 5 Minute Ping Times
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
//^^^ UNTUK UPTIME ROBOT

const Discord = require("discord.js");
const { Client, Util } = require('discord.js');
const { prefix } = require('./config');
const client = new Discord.Client({disableEveryone: true});
const config = require("./config.json");
const timezone = require('moment-timezone');
const moment = require ('moment');
const { RichEmbed } = require('discord.js');
const embed = new Discord.RichEmbed;
const Canvas = require ("canvas")

client.on("ready", () => {
    console.log(`Logged in as : ${client.user.tag}`);
    console.log(`${client.user.username} is ready!`) //log untuk menandakan bot kalian sudah online:v
    setInterval(() => {
     const status = [
      `Mention me @Orihime`,
      `Created by 『ғᴍᴄ』𝓲𝓷𝓿𝓪𝓵𝓲𝓭-𝓾𝓼𝓮𝓻`,
      `🌍On🌍 ${client.guilds.size} Server`,
      `📡On📡 ${client.channels.size} Voice Channels`,
      `👥With👥 ${client.users.size} Users`
    ];
     let random = Math.floor(Math.random() * status.length)
     client.user.setPresence({ game: { name: status[random], type: "Playing", url: "https://www.twitch.tv/_kibayy"}});
  }, 5000);
})

client.on('message', async message => { // eslint-disable-line
	if (message.author.bot) return undefined;
	let prefix = config.prefix;
  if (message == `<@${client.user.id}>` || message == `<@!${client.user.id}>`) {

        message.reply(`My prefix is\`${prefix}\``);

    }
  if (message.content.toLowerCase === 'Asu' || message.content === 'asu' || message.content === 'bangsat' || message.content === 'Bangsat') {
    message.content.toLowerCase()
    message.delete(message)
    message.reply('Jangan berkata kasar ya 😊')
}
  if (message.content === 'Anjing' || message.content === 'anjing' || message.content === 'Kontol' || message.content === 'kontol') {
    message.content.toLowerCase()
    message.delete(message)
    message.reply('Jangan berkata kasar ya 😊')
}
  if (message.content === 'Memek' || message.content === 'memek' || message.content === 'ngentot' || message.content === 'Ngentot') {
    message.content.toLowerCase()
    message.delete(message)
    message.reply('Jangan berkata kasar ya 😊')
}
  if (message.content === 'Ngentod' || message.content === 'ngentod' || message.content === 'jembut' || message.content === 'Jembut') {
    message.content.toLowerCase()
    message.delete(message)
    message.reply('Jangan berkata kasar ya 😊')
}  
  if (message.content === 'tolol' || message.content === 'Tolol' || message.content === 'Goblok' || message.content === 'goblok') {
    message.content.toLowerCase()
    message.delete(message)
    message.reply('Jangan berkata kasar ya 😊')
}
  if (message.content === 'jancok' || message.content === 'fuck' || message.content === 'Fuck' || message.content === 'Jancok') {
    message.content.toLowerCase()
    message.delete(message)
    message.reply('Jangan berkata kasar ya 😊')
}
    if (message.content.toLowerCase === 'Pagi semua' || message.content === 'Selamat pagi' || message.content === 'Pagi' || message.content === 'selamat pagi') {
    message.content.toLowerCase()
    message.reply('Selamat pagi juga, Selamat beraktifitas, dan jangan lupa Bahagia <a:emoji_33:687274975769788474>')
}
  if (message.content === 'Siang' || message.content === 'siang' || message.content === 'Selamat siang' || message.content === 'selamat siang') {
    message.content.toLowerCase()
    message.reply('Selamat siang juga, Jangan lupa makan siangnya <a:UwU:687150015029706775>')
}
  if (message.content === 'Malam' || message.content === 'malam' || message.content === 'Selamat malam' || message.content === 'selamat malam') {
    message.content.toLowerCase()
    message.reply('Selamat malam juga, Jangan lupa berdoa sebelum tidur <a:emoji_34:687275029091975274>')
}
  if (message.content === `<@{client.user.id}>`) {
    message.content.toLowerCase()
    message.reply('Ada yang bisa saya bantu? <a:emoji_4:689449997279821825>')
}

  if (!message.content.startsWith(prefix)) return undefined;

	let command = message.content.toLowerCase().split(' ')[0];
	command = command.slice(prefix.length);
	let args = message.content.slice(prefix.length).trim().split(" ");
	let cmd = args.shift().toLowerCase();
	
	try {
		let commandFile = require(`./cmds/${cmd}.js`);
		commandFile.run(client, message, args);
	} catch (e) {
		console.log(e.message)
	} finally {
		console.log(`${message.author.username} using command ${cmd}`);
	}
  const regex = /(https?:\/\/)?(www\.)?(discord(\.|dot|\(dot\))(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/ig.test(message.content);

if (regex) {
message.delete();
message.reply('<:Error:575148612166746112> | You don\'t have permission to run advertisement!') 
  }
})

client.on("guildMemberAdd", async member => {
  const channel = member.guild.channels.find(
    ch => ch.id === "683477400603852866"
  );
  if (!channel) return;
  const canvas = Canvas.createCanvas(1000, 500);
  const ctx = canvas.getContext("2d");
  console.log(member);
 
  const background = await Canvas.loadImage(
    "https://cdn.nekos.life/wallpaper/_Xyl5T1S_HM.png"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
 
  ctx.strokeStyle = "#808080";
  ctx.strokeRect(0, 0);
 
  ctx.font = "bold 50pt sans serif"
  ctx.fillStyle = "#fff"
  ctx.textAlign = "center"
  ctx.fillText(`WELCOME`, 496,377)
  
  ctx.font = " 30pt  serif"
  ctx.fillStyle = "#fff"
  ctx.textAlign = "center"
  ctx.fillText(`${member.displayName} #${member.user.discriminator}`, 496,419)

  ctx.font = " 30pt  serif"
  ctx.fillStyle = "#fff"
  ctx.fillText(`Kamu Member ke ${member.guild.memberCount} di ${member.guild.name}`,496,460)
 
  ctx.beginPath();
	ctx.arc(495, 165, 130, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();
  
 const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 365, 35, 260, 260);
 
 
  const att = new Discord.Attachment(canvas.toBuffer(), `${member.displayName}.png`);
  channel.send(`${member.user}  
 **Welcome to server CHILLCOFFEE**, Silahkan cek <#683504506100776997> , Ambil role di <#683504556457459738> , Isi juga <#683504930371141736> Hope full enjoy in this server. <a:emoji_34:687275029091975274>
`, att);
});
 
client.on("guildMemberRemove", async member => {
  const channel = member.guild.channels.find(
    ch => ch.id === "683477400603852866"
  );
  if (!channel) return;
  const canvas = Canvas.createCanvas(1000, 500);
  const ctx = canvas.getContext("2d");
  console.log(member);
 
  const background = await Canvas.loadImage(
    "https://cdn.nekos.life/wallpaper/A66nCoXlswo.jpg");
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
 
  ctx.strokeStyle = "#808080";
  ctx.strokeRect(0, 0);
 
  ctx.font = "bold 50pt sans serif"
  ctx.fillStyle = "#fff"
  ctx.textAlign = "center"
  ctx.fillText(`GOOD BYE`, 496,377)
  
  ctx.font = " 30pt  serif"
  ctx.fillStyle = "#fff"
  ctx.textAlign = "center"
  ctx.fillText(`${member.displayName} #${member.user.discriminator}`, 496,419)

  ctx.font = " 30pt  serif"
  ctx.fillStyle = "#fff"
  ctx.fillText(`Member Sekarang ${member.guild.memberCount} di ${member.guild.name}`,496,460)
 
  ctx.beginPath();
	ctx.arc(495, 165, 130, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();
  
 const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 365, 35, 260, 260);
 
 
  const att = new Discord.Attachment(canvas.toBuffer(), `${member.displayName}.png`);
  channel.send(`**${member.displayName}** **Selamat jalan** Semoga bahagia diluar sana. <a:emoji_33:687274975769788474> `,att);
  
});

client.on("guildMemberAdd", async member => {
  const channel = member.guild.channels.find(
    ch => ch.id === "660209942355116032"
  );
  if (!channel) return;
  const canvas = Canvas.createCanvas(1000, 500);
  const ctx = canvas.getContext("2d");
  console.log(member);
 
  const background = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/624572225466400779/692059378123014174/images_9.jpeg"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
 
  ctx.strokeStyle = "#00FFFF";
  ctx.strokeRect(0, 0);
 
  ctx.font = "bold 50pt sans serif"
  ctx.fillStyle = "#fff"
  ctx.textAlign = "center"
  ctx.fillText(`WELCOME`, 496,377)
  
  ctx.font = " 30pt  serif"
  ctx.fillStyle = "#fff"
  ctx.textAlign = "center"
  ctx.fillText(`${member.displayName} #${member.user.discriminator}`, 496,419)

  ctx.font = " 30pt  serif"
  ctx.fillStyle = "#fff"
  ctx.fillText(`Kamu Member ke ${member.guild.memberCount} di ${member.guild.name}`,496,460)
 
  ctx.beginPath();
	ctx.arc(495, 165, 130, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();
  
 const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 365, 35, 260, 260);
 
 
  const att = new Discord.Attachment(canvas.toBuffer(), `${member.displayName}.png`);
  channel.send(`Selamat datang ${member.user} di server **DEADBYDEAD** <a:emoji_23:684359492946755595> Baca rules server di <#544201467762835502>, Cek juga <#542911754284302336> untuk mengetahui info terbaru. Semoga betah diserver ini <a:Eaaa:687149300140212245>
 `, att);
});
 
client.on("guildMemberRemove", async member => {
  const channel = member.guild.channels.find(
    ch => ch.id === "660209942355116032"
  );
  if (!channel) return;
  const canvas = Canvas.createCanvas(1000, 500);
  const ctx = canvas.getContext("2d");
  console.log(member);
  const background = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/624572225466400779/692059386561953812/images_10.jpeg");
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
 
  ctx.strokeStyle = "#00FFFF";
  ctx.strokeRect(0, 0);
 
  ctx.font = "bold 50pt sans serif"
  ctx.fillStyle = "#fff"
  ctx.textAlign = "center"
  ctx.fillText(`GOOD BYE`, 496,377)
  
  ctx.font = " 30pt  serif"
  ctx.fillStyle = "#fff"
  ctx.textAlign = "center"
  ctx.fillText(`${member.displayName} #${member.user.discriminator}`, 496,419)

  ctx.font = " 30pt  serif"
  ctx.fillStyle = "#fff"
  ctx.fillText(`Member Sekarang ${member.guild.memberCount} di ${member.guild.name}`,496,460)
 
  ctx.beginPath();
	ctx.arc(495, 165, 130, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();
  
 const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 365, 35, 260, 260);
 
 
  const att = new Discord.Attachment(canvas.toBuffer(), `${member.displayName}.png`);
  channel.send(`Selamat tinggal **${member.displayName}** <a:emoji_21:684359442170773524> Terimakasih atas kunjungannya. Semoga bahagia diluar sana, Mohon maaf yang sebesar besarnya apabila ada kata yang kurang berkenan atau ketidaknyamanan sewaktu disini <a:emoji_30:685056440515166333> `,att);
  
});

//^^ INI UNTUK COMMAND HANDLER

client.login(process.env.BOT_TOKEN);
//^^ TARO TOKEN BOT DI `.env` (yang ada logo kunci nya)
//format nya: BOT_TOKEN=YOUR_BOT_TOKEN;
