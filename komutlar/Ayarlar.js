const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const embedayarlar = new Discord.MessageEmbed()
    .setAuthor(`CruzyHost Bilişim | Ayarlar `)
    .setTitle(``)
    .setColor(`#ee7621`)
    .setThumbnail(
      "https://cdn.discordapp.com/icons/818740312293376000/a_9c062cea607a11f22199bda24788785a.gif?size=128"
    )
    .setDescription(
      `<:yildiz:819973383667056680> CruzyHost Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Komut__`,
      `<a:turuncu:822084547386146836> \`${prefix}modlog [#kanal]\` ModLog Kanal Ayalar.`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:logo:822085656540610591>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:logo:822085656540610591> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:logo:822085656540610591> \`${prefix}siteler\` | CruzyHost Sitelerini Görürsün`
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
