require('dotenv').config();
const {Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online.`);
    console.log(`${c.user.id}`)
});
client.login(process.env.TOKEN);

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }

    console.log(message.content);
    message.reply(message.content);
});

