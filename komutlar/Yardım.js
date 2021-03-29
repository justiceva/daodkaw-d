const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const embed = new Discord.MessageEmbed()
    .setAuthor(`QualitySel The |Bot©`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/823592301796392960/826048182990667806/standard_2.gif"
    )
    .setDescription(
      `<a:tik:822531200353959937> QualitySel The |Bot© Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
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
      `__Çekiliş Komutlar__`,
      `<a:green:822530401301954632> \`${prefix}çekiliş\` `,
      true
    )
    .addField(
      `__Eklenti Komutlar__`,
      `<a:green:822530401301954632> \`${prefix}eklenti\``,
      true
    )
    .addField(
      `__Eğlence Komutlar__`,
      `<a:green:822530401301954632> \`${prefix}eğlence\``,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:yesil:822529538663514173>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:yesil:822529538663514173> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:yesil:822529538663514173> \`${prefix}iletişim\` | QualitySel  İletişim Bilgileri.`
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
