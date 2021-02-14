console.log('beep beep');
//.env
require('dotenv').config();
//import discord.js
const Discord = require('discord.js');

const client = new Discord.Client();

//imoprt pliku commands.js
const commandHandler = require("./commands");

client.login(process.env.DISCORD_TOKEN);
client.on('ready', readyDiscord);

function readyDiscord(){
    console.log('boop');
}
// commandHandler w pliku commands.js przypisana do module.exports
client.on('message', commandHandler);


