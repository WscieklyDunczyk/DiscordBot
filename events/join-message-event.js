const { MessageEmbed } = require("discord.js");
const userChannelId = "711331442134745178";
const adminChannelId = "798267860178567169";

module.exports = {
    name: "guildMemberAdd",
    description: "Wiadomość powitalna dla nowych użytkowników",

    // member.guild.channels.cache zwraca liste kanałów w postaci kolekcji
    run(member) {

        const userChannel = member.guild.channels.cache.get(userChannelId)
        const adminChannel = member.guild.channels.cache.get(adminChannelId)

        // wiadomosc embed
        const embeduser = new MessageEmbed()
        embeduser.setTitle("Nowy użytkownik")
        embeduser.setColor(0x00ff04)
        embeduser.setDescription(`<@${member.user.id}>, witaj na serwerze 🚗`)
        // wyslanie wiadomosci dla uzytkownikow
        userChannel.send(embeduser)

        // wiadomosc embed
        const embedadmin = new MessageEmbed()
        embedadmin.setTitle("Nowy użytkownik")
        embedadmin.setColor(0x00ff04)
        embedadmin.setDescription(`<@${member.user.id}> dołączył(-a) do serwera.`)
        // wyslanie wiadomosci dla adminow
        adminChannel.send(embedadmin);
    }
}