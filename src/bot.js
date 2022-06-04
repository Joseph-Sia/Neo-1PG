import { config } from 'dotenv';
config({ path: '.env' })

import { Client, Intents, Message } from 'discord.js';
import { EndBehaviorType } from '@discordjs/voice';

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

bot.on('ready', () => console.log('ready'));
bot.on('message', async(msg) => {
    //if (msg.author.bot) return;

    //await msg.reply('SUP')
    if (msg.author.bot) {return}
    if (msg.content.startsWith('apple')) {
        msg.reply('iPhone')
    }

    if (msg.content.startsWith('!dm')) {
        let messageContent=msg.content.replace('!dm', '')
        msg.member.send('HELLO!!')
    }
})
bot.login(process.env.BOT_TOKEN);
