console.log('Hello and welcome');

const Discord = require('discord.js');
const client = new Discord.Client();
client.login('OTI0MDY2MzQ1ODQxMjA5MzY0.YcZJ2Q.2-vqpPxAoWXX0mMvgd6rFfJpkFg');

client.on('ready',  readyDiscord);

function readyDiscord() {
    console.log('Loving you...');
}

client.on('message', gotMessage);

function gotMessage (msg) 
{
console.log(msg.content);
if (msg.content === 'Admin-level 1') {
    msg.reply('Hello and welcome to the server I am one of the admins here if you ask for the rules just write"Admin rules" and if you need other things you can contact the creator of the server on adem.tebourbi@gmail.com 👌👌👌');
}
    if (msg.content === 'Admin rules') {
    msg.reply('The Rules are very simple: first Say hello before starting a discussion second bad words are ilegal here so be carful because admins will banned you if you say a bad words and finally do not send messages not understandable if you do one of these actions exept the first one the admins will delete your message 👮👮👮');}
    if (msg.content.includes('nega')) {
        msg.delete();
        msg.reply("I detect a bad word from you and i deleted your message so be carful and watch you talk please before i banned you I think it's enough for you to understand your fault 💀💀💀 ");
    }
    if (msg.content.includes('bitch')) {
        msg.delete();
        msg.reply("I detect a bad word from you and i deleted your message so be carful and watch you talk please before i banned you I think it's enough for you to understand your fault 💀💀💀 ");
    }
    if (msg.content.includes('fuck')) {
        msg.delete();
        msg.reply("I detect a bad word from you and i deleted your message so be carful and watch you talk please before i banned you I think it's enough for you to understand your fault 💀💀💀 ");
    }
    if (msg.content.includes('zip')) {
        msg.delete();
        msg.reply("I detect a bad word from you and i deleted your message so be carful and watch you talk please before i banned you I think it's enough for you to understand your fault 💀💀💀 ");
    }
    if (msg.content.includes('mik')) {
        msg.delete();
        msg.reply("I detect a bad word from you and i deleted your message so be carful and watch you talk please before i banned you I think it's enough for you to understand your fault 💀💀💀 ");
    }
    if (msg.content.includes('ميك')) {
        msg.delete();
        msg.reply("I detect a bad word from you and i deleted your message so be carful and watch you talk please before i banned you I think it's enough for you to understand your fault 💀💀💀 ");
    }
    if (msg.content.includes('زيب')) {
        msg.delete();
        msg.reply("I detect a bad word from you and i deleted your message so be carful and watch you talk please before i banned you I think it's enough for you to understand your fault 💀💀💀 ");
    }
    if (msg.content.includes('خر')) {
        msg.delete();
        msg.reply("I detect a bad word from you and i deleted your message so be carful and watch you talk please before i banned you I think it's enough for you to understand your fault 💀💀💀 ");
    }
    if (msg.content.includes('بول')) {
        msg.delete();
        msg.reply("I detect a bad word from you and i deleted your message so be carful and watch you talk please before i banned you I think it's enough for you to understand your fault 💀💀💀 ");
    }
    if (msg.content.includes('ي كلب')) {
        msg.delete();
        msg.reply("I detect a bad word from you and i deleted your message so be carful and watch you talk please before i banned you I think it's enough for you to understand your fault 💀💀💀 ");
    }
    if (msg.content.includes('ي مصتك')) {
        msg.delete();
        msg.reply("I detect a bad word from you and i deleted your message so be carful and watch you talk please before i banned you I think it's enough for you to understand your fault 💀💀💀 ");
    }
    }
