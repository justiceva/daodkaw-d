const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const embedkullanıcı = new Discord.MessageEmbed()
    .setAuthor(`QualitySel | Kullanıcı`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/824633401096011862/824662081882161214/standard_3.gif"
    )
    .setDescription(
      `<a:tik:822531200353959937> QualitySel Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Rozetler__`,
      `<a:green:822530401301954632>\`${prefix}rozetler\` Discord Bot Discord Aldıgınız Rozetleri Komutla Görürsün.`,
      true
    )
    .addField(
      `__Profil__`,
      `<a:green:822530401301954632> \`${prefix}profil\` Discord Bot Size Özel Profil Ayarlar.`,
      true
    )
    .addField(
      `__Avatarım__`,
      `<a:green:822530401301954632> \`${prefix}avatar\` Discord Bot Sizin Avatarınızı Yansıtır.`,
      true
    )
    .addField(
      `__Bot Bilgi__`,
      `<a:green:822530401301954632> \`${prefix}botbilgi\` Discord Botumuzun İstatistiklerini Bakarsınız.`,
      true
    )
    .addField(
      `__Rol Bilgi__`,
      `<a:green:822530401301954632> \`${prefix}rolbilgi\` Etiketlediginiz Bir Rolü Bot Bilgilerini Gösterir.`,
      true
    )
    .addField(
      `__Yetkilerim__`,
      `<a:green:822530401301954632> \`${prefix}yetkilerim\` Discord Bot Size Yetkilerinizi Gösterir.`,
      true
    )
  .addField(
      `__Bilgilendirme__`,
      `<a:yesil:822529538663514173>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:yesil:822529538663514173> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:yesil:822529538663514173> \`${prefix}iletişim\` | ShadowRise İletişim Bilgileri.`
    );
  return message.channel.send(embedkullanıcı);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kullanıcı",
  description: "kullanıcı Menüsü",
  usage: "kullanıcı"
};
