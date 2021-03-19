const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const embed = new Discord.MessageEmbed()
    .setAuthor(`ShadowRise Network`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://media.discordapp.net/attachments/822526781839245332/822526805734850600/20210319_160634.png"
    )
    .setDescription(
      `<a:tik:822531200353959937> ShadowRise Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Genel Komutlar__`,
      `<a:green:822530401301954632> \`${prefix}genel\``,
      true
    )
    .addField(
      `__Ayarlar Komutlar__`,
      `<a:green:822530401301954632> \`${prefix}ayarlar\` `,
      true
    )
    .addField(
      `__Sunucu Koruma__`,
      `<a:green:822530401301954632> \`${prefix}koruma\`  `,
      true
    )
    .addField(
      `__Sunucu Ayarlar__`,
      `<a:green:822530401301954632> \`${prefix}sunucu\` `,
      true
    )
    .addField(
      `__Kullanıcı Komutlar__`,
      `<a:green:822530401301954632> \`${prefix}kullanıcı\` `,
      true
    )
    .addField(
      `__Oyun Komutlar__`,
      `<a:green:822530401301954632> \`${prefix}oyunlar\` `,
      true
    )
    .addField(
      `__Logo Komutlar__`,
      `<a:green:822530401301954632> \`${prefix}logo\` `,
      true
    )
    .addField(
      `__Eklenti Komutlar__`,
      `<a:green:822530401301954632> \`${prefix}eklenti\``,
      true
    )
    .addField(
      `__Eğlence Komutlar__`,
      `<a:green:822530401301954632> \`${prefix}eklenti\``,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:yesil:822529538663514173>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:yesil:822529538663514173> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:yesil:822529538663514173> \`${prefix}iletişim\` | ShadowRise İletişim Bilgileri.`
    );
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Yardım Menüsü",
  usage: "yardım"
};
