const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = 'OTcwNTg0NDY4Mzg3NjU5Nzc2.G7A4bg.d2G3FDe6Y0RgJ23MmvFEpcSQpisSjUoutke2IE'

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
});

client.on("messageCreate", (message) => {
    if (message.content == "Hi Collei!"){
        message.reply("Hello!")
    }
})

client.login(process.env.TOKEN);