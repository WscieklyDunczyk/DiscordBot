    console.log('beep beep');
    
    //.env
    require('dotenv').config();
    
    //import discord.js
    const Discord = require('discord.js');

    const client = new Discord.Client();

    //imoprt pliku commands.js
    const commandHandler = require("./handlers/commands");
    const eventHandler = require("./handlers/events");

    //inicjowanie handlera
    eventHandler(client)
    commandHandler(client)

    client.login(process.env.DISCORD_TOKEN);
    
    client.on('ready', () => {
        console.log('boop');
        //test
        //client.emit("guildMemberAdd", client.guilds.cache.get("688781292854050855").members.cache.get("681404694224306218"));
    });
    // error handler
    client.on('debug', () => {})
    client.on('warn', () => {})
    client.on('error', () => {})
