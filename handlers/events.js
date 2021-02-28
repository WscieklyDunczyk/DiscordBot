const {readdirSync} = require("fs")
const {Constants: {Events},} = require("discord.js")

const serverEvents = Object.values(Events)
const serverEventsPath = __dirname + `/../events`


module.exports = (client) => {

    const events = readdirSync(serverEventsPath)
    for (const file of events) {

        const event = require(__dirname + `/../events/${file}`)
        //client.on(event.name, event.run)
        
        if (!event.run) {
            console.log(`Event ${file} brak funkcji run()`)
            process.exit(1)
        } else if (typeof event.run !== "function") {
            console.log(`Run w pliku ${file} nie jest funkcjia`)
            process.exit(1)
        }
        
        if(serverEvents.includes(event.name)){
            client.on(event.name, event.run)
        }
        else{
            console.log(`Event '${event.name}' w '${file}' nie istnieje`)
            process.exit(1)
        }
    }
}