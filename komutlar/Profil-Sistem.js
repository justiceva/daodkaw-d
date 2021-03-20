const Discord = require("discord.js");
const prefix = process.env.prefix;
exports.run = async (bot, msg, args) => {
  const seviye = new Discord.MessageEmbed()
    .setAuthor(`ShadowRise Network | Profil Sistem`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://media.discordapp.net/attachments/822526781839245332/822526805734850600/20210319_160634.png"
    )
    .setDescription(
      `<a:tik:822531200353959937> ShadowRise Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__İsim Ayarla__**`,
      `<a:green:822530401301954632> \`${prefix}isim-ayarla\` \n Özel Profilinize İsim Ayarlarsınız.`,
      false
    )
  .addField(
      `**__Yaş Ayarla__**`,
      `<a:green:822530401301954632> \`${prefix}yaş-ayarla\` \n Özel Profilinize Yaş Ayarlarsınız.`,
      false
    )
  .addField(
      `**__Soyİsim Ayarla__**`,
      `<a:green:822530401301954632> \`${prefix}soyisim-ayarla\` \n Özel Profilinize Soyİsim Ayarlarsınız.`,
      true
    )
  .addField(
      `**__Cinsiyet Ayarla__**`,
      `<a:green:822530401301954632> \`${prefix}cinsiyet-ayarla\` \n Özel Profilinize Cinsiyet Ayarlarsınız.`,
      true
    )
  .addField(
      `**__Bayrak Ayarla__**`,
      `<a:green:822530401301954632> \`${prefix}bayrak-ayarla\` \n Özel Profilinize Bayrak Ayarlarsınız.`,
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
  name: "seviye-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "seviye"
};
