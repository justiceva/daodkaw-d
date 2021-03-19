const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const embed = new Discord.MessageEmbed()
    .setAuthor(`CruzyHost | Bilişim Merkezi`)
    .setTitle(``)
    .setColor(`#ee7621`)
    .setThumbnail(
      "https://media.discordapp.net/attachments/822526781839245332/822526805734850600/20210319_160634.png"
    )
    .setDescription(
      `<:yildiz:819973383667056680> ShadowRise Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Genel Komutlar__`,
      `<a:turuncu:822084547386146836> \`${prefix}genel\``,
      true
    )
    .addField(
      `__Ayarlar Komutlar__`,
      `<a:turuncu:822084547386146836> \`${prefix}ayarlar\` `,
      true
    )
    .addField(
      `__Sunucu Koruma__`,
      `<a:turuncu:822084547386146836> \`${prefix}koruma\`  `,
      true
    )
    .addField(
      `__Sunucu Ayarlar__`,
      `<a:turuncu:822084547386146836> \`${prefix}sunucu\` `,
      true
    )
    .addField(
      `__Kullanıcı Komutlar__`,
      `<a:turuncu:822084547386146836> \`${prefix}kullanıcı\` `,
      true
    )
    .addField(
      `__Oyun Komutlar__`,
      `<a:turuncu:822084547386146836> \`${prefix}oyunlar\` `,
      true
    )
    .addField(
      `__Logo Komutlar__`,
      `<a:turuncu:822084547386146836> \`${prefix}logo\` `,
      true
    )
    .addField(
      `__Eklenti Komutlar__`,
      `<a:turuncu:822084547386146836> \`${prefix}eklenti\``,
      true
    )
     .addField(
      `__Eğlence Komutlar__`,
      `<a:turuncu:822084547386146836> \`${prefix}eklenti\``,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:logo:822085656540610591>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:logo:822085656540610591> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:logo:822085656540610591> \`${prefix}siteler\` | CruzyHost Sitelerini Görürsün`
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
