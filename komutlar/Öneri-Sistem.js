const Discord = require("discord.js");
const prefix = process.env.prefix;
exports.run = async (bot, msg, args) => {
  const seviye = new Discord.MessageEmbed()
    .setAuthor(`ShadowRise Network | Öneri Sistem`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://media.discordapp.net/attachments/822526781839245332/822526805734850600/20210319_160634.png"
    )
    .setDescription(
      `<a:tik:822531200353959937> ShadowRise Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__ÖneriLog Ayarla__**`,
      `<a:green:822530401301954632> \`${prefix}önerilog ayarla\` \n Discord Sunucuza Öneri Log Kanal Ayarlarsınız.`,
      true
    )
    .addField(
      `**__ÖneriLog Sıfırla__**`,
      `<a:green:822530401301954632> \`${prefix}önerilog sıfırla\` \n Discord Sunucuza Öneri Log Kanalı Sıfırlarsınız.`,
      true
    )
    .addField(
      `**__Öneri Yap__**`,
      `<a:green:822530401301954632> \`${prefix}öneri-yap\` \n Discord Sunucuza Ayarladınız Öneri Loga Mesaj Atar.`,
      true
    )
    .addField(
      `**__ShadowRise Sunucuya Özel Öneri__**`,
      `<a:green:822530401301954632> \`${prefix}öneri\` \n Discord Sunucumuza Bota Veya MCSunucumuza Öneri Yapabilirsiniz..`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:yesil:822529538663514173>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:yesil:822529538663514173> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:yesil:822529538663514173> \`${prefix}iletişim\` | ShadowRise İletişim Bilgileri.`
    );
  msg.channel.send(seviye);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["", ""],
  permLevel: 0
};
exports.help = {
  name: "öneri-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "seviye"
};
