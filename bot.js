const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.id}!`);
});

client.on('ready', () => {
var x = client.channels.get(process.env.ROOM_ID);
if (x) x.join();
});


client.login(process.env.BOT_TOKEN);
