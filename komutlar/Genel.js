const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const embedgenel = new Discord.MessageEmbed()
    .setAuthor(`ShadowRise Network | Genel`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://media.discordapp.net/attachments/822526781839245332/822526805734850600/20210319_160634.png"
    )
    .setDescription(
      `<a:tik:822531200353959937> ShadowRise Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Oylama__`,
      `<a:green:822530401301954632>  \`${prefix}oylama\` Sunucuda Oylama Başlatırsın.`,
      true
    )
    .addField(
      `__Toplam Komut__`,
      `<a:green:822530401301954632>  \`${prefix}komutlar\` Toplam Komut Sayısı Gösterir.`,
      true
    )
    .addField(
      `__Bot Bilgi__`,
      `<a:green:822530401301954632>  \`${prefix}botbilgi\` Bot İstatistiklerini Görürsün.`,
      true
    )
    .addField(
      `__Davet__`,
      `<a:green:822530401301954632>   \`${prefix}davet\` Davet Menüsünü Gösterir.`,
      true
    )
    .addField(
      `__Ping__`,
      `<a:green:822530401301954632>  \`${prefix}ping\` Botun Ping Gösterir.`,
      false
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:yesil:822529538663514173>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:yesil:822529538663514173> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:yesil:822529538663514173> \`${prefix}iletişim\` | ShadowRise İletişim Bilgileri.`
    );
  return message.channel.send(embedgenel);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "genel",
  description: "Genel Menüsü",
  usage: "genel"
};
