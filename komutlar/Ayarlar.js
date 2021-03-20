const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const embedayarlar = new Discord.MessageEmbed()
    .setAuthor(`ShadowRise Network | Ayarlar`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://media.discordapp.net/attachments/822526781839245332/822526805734850600/20210319_160634.png"
    )
    .setDescription(
      `<a:tik:822531200353959937> ShadowRise Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__ModLog__`,
      `<a:green:822530401301954632> \`${prefix}modlog\` Komutla Discord Sunucuza ModLog Kanalını Ayarlarsınız.`,
      true
    )
    .addField(
      `__KüfürEngel__`,
      `<a:green:822530401301954632> \`${prefix}küfürengel\` Discord Sunucuna Küfür Etmeye Çalışanları Durdurursun.`,
      true
    )
    .addField(
      `__Küfür Log__`,
      `<a:green:822530401301954632> \`${prefix}küfürlog\` Discord Sunucuna Küfür Edenlerin Mesaji Silinir Ve Log Kanalına Gider.`,
      true
    )
  .addField(
      `__Reklam Engel__`,
      `<a:green:822530401301954632> \`${prefix}reklamengel\` Discord Sunucuna Reklam Yapmaya Çalışanları Durdurursun.`,
      true
    )
  .addField(
      `__Reklam Log__`,
      `<a:green:822530401301954632> \`${prefix}reklamlog\` Discord Sunucuna Reklam Yapmayı Mesaji Silinir Ve Log Kanalına Gider.`,
      true
    )
    .addField(
      `__Ban__`,
      `<a:green:822530401301954632> \`${prefix}ban\` Discord Sunucundan Birisini Banlamaya Sağlar.`,
      true
    )
    .addField(
      `__BanSay__`,
      `<a:green:822530401301954632> \`${prefix}bansay\` Discord Sunucunuzda Toplam Kaç Banlanmış Kişi Var Onu Gösterir.`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:yesil:822529538663514173>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:yesil:822529538663514173> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:yesil:822529538663514173> \`${prefix}iletişim\` | ShadowRise İletişim Bilgileri.`
    );
  return message.channel.send(embedayarlar);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ayarlar",
  description: "Ayarlar Menüsü",
  usage: "ayarlar"
};
