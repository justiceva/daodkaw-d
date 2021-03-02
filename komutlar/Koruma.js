const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const embedkoruma = new Discord.MessageEmbed()
    .setAuthor(`© ShadowRise Network | Koruma`)
    .setTitle(``)
    .setColor(`BLACK`)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/814946376894513163/815870054843416576/3caed152951498ef3ff31ea94cb55f93.png"
    )
    .setDescription(
      `<a:kirmiziyildiz:815283970820145213> ShadowRise Network Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Rol Koruma__`,
      `<a:black_tik:815280959397691422> \`${prefix}rol-koruma aç & kapat\` Rol Koruma Sistemini Açar`,
      true
    )
    .addField(
      `__Kanal Koruma__`,
      `<a:black_tik:815280959397691422> \`${prefix}kanal-koruma aç & kapat\` Kanal Koruma Sistemini Açar`,
      true
    )
    .addField(
      `__Bot Koruma__`,
      `<a:black_tik:815280959397691422> \`${prefix}bot-koruma aç & kapat\` Bot Koruma Sistemini Açar`,
      true
    )
    .addField(
      `__Bot İzni__`,
      `<a:black_tik:815280959397691422> \`${prefix}bot-izni ver & kaldır\` Bot İzni Verirsin`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:like:815282443086725151>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:like:815282443086725151> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:like:815282443086725151> \`${prefix}siteler\` | ShadowRise Network Sitelerini Görürsün`
    );
  return message.channel.send(embedkoruma);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "koruma",
  description: "KorumaMenüsü",
  usage: "koruma"
};
