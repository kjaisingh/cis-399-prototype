const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const discord_bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
    ],
});

discord_bot.once('ready', () => {
    console.log(`Logged in as ${discord_bot.user.tag}!`);
    // Find the general channel by name
    const generalChannel = discord_bot.channels.cache.find(channel => channel.name === 'general');
    // Send a message to the channel
    generalChannel.send('Estilista Client is active and running');
});



discord_bot.on('error', error => {
    console.error(`An error occurred: ${error}`);
});

const token = "TgnnJ3rhnnJKBvA_LF3tzMwFE8";
discord_bot.login(process.env.DISCORD_TOKEN + token);


module.exports = discord_bot;