const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const embed = new Discord.MessageEmbed()
    .setAuthor(`SN | © ShadowRise Network`)
    .setTitle(``)
    .setColor(`BLACK`)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/814942471792361522/816656849310318592/3caed152951498ef3ff31ea94cb55f93.png"
    )
    .setDescription(
      `<a:kirmiziyildiz:815283970820145213> ShadowRise Network Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Genel Komutlar__`,
      `<a:black_tik:815280959397691422> \`${prefix}genel\``,
      true
    )
    .addField(
      `__Moderasyon Komutları__`,
      `<a:black_tik:815280959397691422> \`${prefix}ayarlar\` `,
      true
    )
    .addField(
      `__Sunucu Koruma__`,
      `<a:black_tik:815280959397691422> \`${prefix}koruma\`  `,
      true
    )
    .addField(
      `__Sunucu Ayarlar__`,
      `<a:black_tik:815280959397691422> \`${prefix}sunucu\` `,
      true
    )
    .addField(
      `__Eğlence Komutları__`,
      `<a:black_tik:815280959397691422> \`${prefix}eğlence\`  `,
      true
    )
    .addField(
      `__Kullanıcı Komutları__`,
      `<a:black_tik:815280959397691422> \`${prefix}kullanıcı\` `,
      true
    )
    .addField(
      `__Oyun Komutları__`,
      `<a:black_tik:815280959397691422> \`${prefix}oyunlar\` `,
      true
    )
    .addField(
      `__Logo Komutları__`,
      `<a:black_tik:815280959397691422> \`${prefix}logo\` `,
      true
    )
    .addField(
      `__Eklenti Komutları__`,
      `<a:black_tik:815280959397691422> \`${prefix}eklenti\``,
      true
    )
  .addField(
      `__Sahibimi Çağır__`,
      `<a:black_tik:815280959397691422> \`${prefix}çağır <sebep>\` Bi Durum Varsa Sahibimi Bildir.`,
      true
    )
  .addField(
      `__Öneri__`,
      `<a:black_tik:815280959397691422> \`${prefix}öneri <mesaj>\` Minecraft Sunucuya Öneri Yapabilirsin.`,
      false
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
