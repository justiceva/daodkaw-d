const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let guild = message.guild;
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:x: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  guild.voice.create(`Toplam Kullanıcı Sayısı : ${guild.memberCount}`, 'voice');
  guild.voice.create(`Üye Sayısı : ${guild.members.cache.filter(m => !m.user.bot).size}`, 'voice');
  guild.voice.create(`Bot Sayısı : ${guild.members.cache.filter(m => m.user.bot).size}`, 'voice');

  message.channel.send(`:white_check_mark:  Sunucudaki üye sayısını kanallarda gösterecek bir sistem kuruldu.`);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['panelkur'],
  permLevel: 3
};

exports.help = {
  name: 'panelkur',
  description: 'Sunucudaki üye sayısını kanallarda gösterecek bir sistem kurar.',
  usage: 'panelkur'
};
   