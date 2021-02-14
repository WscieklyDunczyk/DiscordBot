console.log('beep beep');
//import discord.js
const Discord = require('discord.js');
//.env
require('dotenv').config();

const client = new Discord.Client();

//imoprt pliku commands.js
const commandHandler = require("./commands");

client.login(process.env.DISCORD_TOKEN);
//client.login(process.env.DISCORD_BOT_TOKEN);
client.on('ready', readyDiscord);

function readyDiscord(){
    console.log('boop');
}
// commandHandler w pliku commands.js przypisana do module.exports
client.on('message', commandHandler);


