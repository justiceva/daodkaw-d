const Discord = require('discord.js');
const db = require('quick.db')
 const Gamedig = require('gamedig');
exports.run = (client, message, args) => { 
  
  
  let darkcode = args[0]
  if(!darkcode) return message.reply('Bir ip girmelisin.')
   
  
 
Gamedig.query({
    type: 'minecraft',
    host: darkcode
}).then((state) => {
 
 let darkcode = new Discord.MessageEmbed() 
 .setTitle('Sunucu İstatistikleri') 
 .setDescription('') 
 .addBlankField()
 .addField('+', 'Sunucu İsimi: **'+state.name+'** \n Sunucu max oyuncu sayısı: **'+state.maxplayers+'** \n Aktif Oyuncu: **'+state.players.length+'** \n Sunucu Pingi: '+state.ping+'')
 .setColor('BLACK')
 .setFooter('')
 .setThumbnail(message.author.avatarURL())
 message.channel.send(darkcode)
 
 }).catch((error) => {
    return message.reply('Yanlış bir şey girdin veya,girdiğin sunucu offline durumda.')
});
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'minecraft-istatistik',
  description: '', 
  usage: 'minecraft-istatistik'
};﻿
