const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const embedgenel = new Discord.MessageEmbed()
    .setAuthor(`Shadow | Çekiliş `)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/824633401096011862/824662081882161214/standard_3.gif"
    )
    .setDescription(
      `<a:tik:822531200353959937> Shadow Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Başlat__`,
      `<a:green:822530401301954632>  \`${prefix}başlat\` Sunucudan Bir Çekiliş Başlatabilirsin.`,
      true
    )
   .addField(
      `__Yenile__`,
      `<a:green:822530401301954632>  \`${prefix}reroll\` Çekilişi Yeniden Çeker.`,
      true
    )
    .addField(
      `__Sonlandır__`,
      `<a:green:822530401301954632>  \`${prefix}sonlandır\` Çekilişi Bitir.`,
      true
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
  name: "çekiliş",
  description: "Çekiliş Menüsü",
  usage: "çekiliş"
};
