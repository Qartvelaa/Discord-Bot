const { Client, GatewayIntentBits } = require('discord.js');
const chalk = require('chalk');

require('dotenv').config();
const { token, clientId } = process.env;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('ready', () => {
  console.log(chalk.bold.blueBright(`${client.user.tag} has Logged in`));
});

client.on('messageCreate', (msg) => {
  console.log(`${msg.author.tag}: ${msg.content} : ${msg.createdAt}`);
});

client.login(token);
