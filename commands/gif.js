const { Message } = require('discord.js');
const fetch = require('node-fetch');
module.exports = async function (msg, args){
    let tenorKey = 'XVALEZI0F6FO';
    let keyWords = 'pepe';
    if(args.length > 0){
        keyWords = args.join(" ");
    }
    let url = `https://g.tenor.com/v1/search?q=${keyWords}&key=${tenorKey}&limit=8`;
    let response = await fetch(url);
    let json = await response.json();
    //console.log(json);
    const index = Math.floor(Math.random() * json.results.length);
    msg.channel.send(json.results[index].url);
};
