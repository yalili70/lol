const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.id}!`);
});

client.on('ready', () => {
var x = client.channels.get("488516893347545099");
if (x) x.join();
});


client.login("NDg2ODY0ODgyNzU1NTY3NjI3.DrSpkw.FJwtM5sPH4AFVK39fafXyyr3vcM");
