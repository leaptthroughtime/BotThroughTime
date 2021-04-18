/**
 * Discord Server Bot: BotThroughTime
 * Author: Alan Lin (LeaptThroughTime)
 * Date: 4/18/2021
 *
 * @type {module:"discord.js"}
 */

const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client({
    partials: ['MESSAGE', 'REACTION', 'CHANNEL'],
});

client.on('ready', () => {
    console.log('Bot is ready');
});

// add reaction-role function
client.on('messageReactionAdd', async (reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.channel.id == '831873209388236800') {
        if(reaction.emoji.name === '✅') {
            await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add('831899365387141170');
            console.log('User verification added.')
        }
    } else return;
});

// remove reaction-role function
client.on('messageReactionRemove', async (reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.channel.id == '831873209388236800') {
        if(reaction.emoji.name === '✅') {
            await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove('831899365387141170');
            console.log('User verification removed.')
        }
    } else return;
});

client.login(process.env.BOT_TOKEN);