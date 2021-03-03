const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 
  let user = message.mentions.users.first() || message.author;

  let userinfo = {};
  userinfo.avatar = user.avatarURL();

  if(!yazi) return message.channel.send( new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `<a:unlem:816363628282249266> **Yanlış Kullanım** \n Doğru Kullanım: \`sn!elmas [Yazı]\``
        )
    );
  const linqo = `https://habbofont.net/font/palooza_blue/${yazi}.gif`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Elmas Logo")
  .setColor("BLACK")
  .setImage(linqo)
 .setFooter(
      `${message.author.username} tarafından istendigi. Elmas Logo`,
      userinfo.avatar
    );
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yazıfoto','yazı-foto'],
    permLevel: 0
}

exports.help = {
    name: 'elmas',
    description: 'Yazdığınız yazıyı dinamik çevirir.',
    usage: 'elmas <yazı>'
}