const { MessageEmbed } = require("discord.js")

const adminChannelId = "798267860178567169"

module.exports = {
    name: "guildMemberRemove",

    // member.guild.channels.cache zwraca liste kanałów w postaci kolekcji
    run(member) {
        const adminChannel = member.guild.channels.cache.get(adminChannelId)

         // wiadomosc embed
        const embed = new MessageEmbed()
        .setTitle("Nowy użytkownik")
        .setColor(0xff0000)
        .setDescription(`<@${member.user.id}> opuścił(-a) serwer.`)
        // wyslanie wiadomosci
        adminChannel.send(embed);
    }
}