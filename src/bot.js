import { Client, Intents } from 'discord.js'; 
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
bot.on('ready', () => console.log('ready'));
bot.login('OTM0Njc4MTY4MDAwOTQ2MjE3.Yezk4A.MgC0aWzeZ3V7qAdV5KjZRwsA0ck');
