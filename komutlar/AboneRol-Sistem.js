const Discord = require("discord.js");
const prefix = process.env.prefix;
exports.run = async (bot, msg, args) => {
  const seviye = new Discord.MessageEmbed()
    .setAuthor(`ShadowRise Network | AboneRol Sistem`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://media.discordapp.net/attachments/822526781839245332/822526805734850600/20210319_160634.png"
    )
    .setDescription(
      `<a:tik:822531200353959937> ShadowRise Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__Abone__**`,
      `<a:green:822530401301954632> \`${prefix}abone\` \n Youtubunuza Abone Olan Kişiye Abone Rol Verir.`,
        true
    )
     .addField(
      `**__Abone Yetkili__**`,
      `<a:green:822530401301954632> \`${prefix}abone-yetkili\` \n Abone Rölünü Verecek Kişinin AboneRol Yetkilisini Ayarlar.`,
        true
    )
     .addField(
      `**__Abone Rol__**`,
      `<a:green:822530401301954632> \`${prefix}abonerol\` \n Abone Olan Kişiye Verilecek Rölü Ayarlama.`,
        true
    )
   .addField(
      `**__Abone Log__**`,
      `<a:green:822530401301954632> \`${prefix}abonelog\` \n Abone Rölü Verecek Kişinin Verdigi Mesaj Logu Ayarlarsın`,
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
  aliases: [],
  permLevel: 0
};
exports.help = {
  name:"abonerol-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "seviye"
};
