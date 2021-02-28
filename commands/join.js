const ytdl = require('ytdl-core-discord');

module.exports = {
    name: "play",
    aliases: ["p"],

    async run(message) {
        const { voice } = message.member

        if(!voice.channelID){
            message.reply("Najpierw dołącz do kanału głosowego!");
        }
        
        voice.channel.join().then(async(connection, url) => {     
            url = 'https://www.youtube.com/watch?v=hdy5EMgKoyg'
            connection.play(await ytdl(url), { type: 'opus' })
        })

    }
}