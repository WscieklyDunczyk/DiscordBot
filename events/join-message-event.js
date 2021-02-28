const { MessageEmbed, Collection, Client, MessageAttachment } = require("discord.js");
const fetch = require("node-fetch");
const logChannelId = "732593980373467146";
const messageChannelID = "743542083691741245";

module.exports = {
    name: "guildMemberAdd",
    description: "Wiadomość powitalna dla nowych użytkowników",

    // member.guild.channels.cache zwraca liste kanałów w postaci kolekcji
    run(member) {
        // error => member jest undefined
        const logChannel = member.guild.channels.cache.get(logChannelId)
        const messageChannel = member.guild.channels.cache.get(messageChannelID)

        
        // wysyłanie wiadomosci dla wszystkich
        messageChannel.send(`<@${member.user.id}>, witaj na serwerze 🚗`)

        // wysyłanie wiadomości dla adminow
        const embed = new MessageEmbed()
        embed.setTitle("Nowy użytkownik")
        embed.setColor(0x00ff04)
        embed.setDescription(`<@${member.user.id}> dołączył(-a) do serwera.`)

        messageChannel.send(embed);
    }
}