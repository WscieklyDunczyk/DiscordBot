const {Collection} = require("discord.js")
const {readdirSync} = require("fs")
const PREFIX = process.env.PREFIX

// module.exports udostepnia funkcje gdy plik commands.js jest "require" (taka metoda nie potrzebuje nazwy)
module.exports = client => {
    client.commands = new Collection()
    const commandFiles = readdirSync(__dirname + "/../commands")

    for (const file of commandFiles) {
        const command = require(__dirname + `/../commands/${file}`)
        if (command.name) {
            client.commands.set(command.name, command)
        }
    }

    console.log(commandFiles)

    client.on("message", async msg => {
        const {
            author,
            guild,
            channel
        } = msg

        // czy user jest botem
        if (author.bot) {
            return
        }
        // ignorowanie wiadomosci bez prefixu
        if (!msg.content.startsWith(PREFIX)) return

        const args = msg.content.slice(PREFIX.length).trim().split(/ +/g)

        const cmdName = args.shift().toLowerCase()

        const cmd =
            client.commands.get(cmdName) ||
            client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(cmdName), )

        if (!cmd) return

        try {
            cmd.run(msg, args)
        } catch (error) {
            console.log(error)
            msg.reply("Wystąpił błąd")
        }

    })
}