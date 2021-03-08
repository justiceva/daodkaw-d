const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let guild = message.guild;
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:x: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  message.guild.channels.create(`Toplam Kullanıcı Sayısı : ${guild.memberCount}`, 'voice');
  message.guild.channels.create(`Üye Sayısı : ${guild.members.cache.filter(m => !m.user.bot).size}`, 'voice');
  message.guild.channels.create(`Bot Sayısı : ${guild.members.cache.filter(m => m.user.bot).size}`, 'voice');

  message.channel.send(`:white_check_mark:  Sunucudaki üye sayısını kanallarda gösterecek bir sistem kuruldu.`);
}; 
//edited by dbe
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