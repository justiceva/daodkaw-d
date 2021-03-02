const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const embedgenel = new Discord.MessageEmbed()
    .setAuthor(`© ShadowRise Network | Genel`)
    .setTitle(``)
    .setColor(`BLACK`)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/814946376894513163/815870054843416576/3caed152951498ef3ff31ea94cb55f93.png"
    )
    .setDescription(
      `<a:kirmiziyildiz:815283970820145213> ShadowRise Network Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Oylama__`,
      `<a:black_tik:815280959397691422> \`${prefix}oylama\` Oylama Başlatırsın.`,
      true
    )
    .addField(
      `__Toplam Komut__`,
      `<a:black_tik:815280959397691422> \`${prefix}komutlar\` Bottaki Toplam Komut Sayısı Gösterir.`,
      true
    )
    .addField(
      `__Bot Bilgi__`,
      `<a:black_tik:815280959397691422> \`${prefix}botbilgi\` Botun İstatistiklerini Görürsün.`,
      true
    )
    .addField(
      `__Davet__`,
      `<a:black_tik:815280959397691422> \`${prefix}davet\` Davet Menüsünü Gösterir.`,
      true
    )
    .addField(
      `__İletişim__`,
      `<a:black_tik:815280959397691422> \`${prefix}iletişim\` Bizimle İletişime Geçebilmek İçin Bilgiler.`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:like:815282443086725151>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:like:815282443086725151> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:like:815282443086725151> \`${prefix}siteler\` | ShadowRise Network Sitelerini Görürsün`
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
