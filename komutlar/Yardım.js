const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const embed = new Discord.MessageEmbed()
    .setAuthor(`SN | © ShadowRise Network`)
    .setTitle(``)
    .setColor(`BLACK`)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/814946376894513163/815870054843416576/3caed152951498ef3ff31ea94cb55f93.png"
    )
    .setDescription(
      `<a:kirmiziyildiz:815283970820145213> ShadowRise Network Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__<a:online:815519562044801036> Genel Komutlar__`,
      `<a:black_tik:815280959397691422> \`${prefix}genel\``,
      true
    )
    .addField(
      `__<a:online:815519562044801036> Moderasyon Komutları__`,
      `<a:black_tik:815280959397691422> \`${prefix}ayarlar\` `,
      true
    )
    .addField(
      `__<a:online:815519562044801036> Sunucu Koruma__`,
      `<a:black_tik:815280959397691422> \`${prefix}koruma\`  `,
      true
    )
    .addField(
      `__<a:online:815519562044801036> Sunucu Ayarlar__`,
      `<a:black_tik:815280959397691422> \`${prefix}sunucu\` `,
      true
    )
    .addField(
      `__Eğlence Komutları__`,
      `<a:black_tik:815280959397691422> \`${prefix}eğlence\`  `,
      true
    )
    .addField(
      `__<a:online:815519562044801036> Kullanıcı Komutları__`,
      `<a:black_tik:815280959397691422> \`${prefix}kullanıcı\` `,
      true
    )
    .addField(
      `__Oyun Komutları__`,
      `<a:black_tik:815280959397691422> \`${prefix}oyunlar\` `,
      true
    )
    .addField(
      `__Çerçeve Komutları__`,
      `<a:black_tik:815280959397691422> \`${prefix}çerçeve\` `,
      true
    )
    .addField(
      `__<a:online:815519562044801036> Eklenti Komutları__`,
      `<a:black_tik:815280959397691422> \`${prefix}eklenti\``,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:like:815282443086725151>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:like:815282443086725151> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:like:815282443086725151> \`${prefix}siteler\` | ShadowRise Network Sitelerini Görürsün`
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
