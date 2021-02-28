const { MessageEmbed, Collection } = require("discord.js")

const logChannelId = "743542083691741245"

module.exports = {
    name: "guildMemberRemove",

    // member.guild.channels.cache zwraca liste kanałów w postaci kolekcji
    run(member) {
        // error => member jest undefined
        const logChannel = member.guild.channels.cache.get(logChannelId)

        // wysyłanie wiadomości dla adminow
        const embed = new MessageEmbed()
        .setTitle("Nowy użytkownik")
        .setColor(0xff0000)
        .setDescription(`<@${member.user.id}> opuścił(-a) serwer.`)

        logChannel.send(embed);
    }
}