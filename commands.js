//import komend
const tomek = require("./commands/tomek");
const gif = require("./commands/gif");
const covid = require("./commands/covid");

const commands = { tomek, gif, covid };

// module.exports udostepnia funkcje gdy plik commands.js jest "require" (taka metoda nie potrzebuje nazwy)
module.exports = async function (msg){
    //ignorowanie wiadomosci botow
    if(msg.author.bot) return;
        let tokens = msg.content.split(" ");
        let command = tokens.shift();
        if(command.charAt(0) === "!"){
            command = command.substring(1);
            commands[command](msg, tokens);
        }
    
}