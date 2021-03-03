const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const embedlogo = new Discord.MessageEmbed()
    .setAuthor(`© ShadowRise Network | Logo`)
    .setTitle(``)
    .setColor(`BLACK`)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/814946376894513163/815870054843416576/3caed152951498ef3ff31ea94cb55f93.png"
    )
    .setDescription(
      `<a:kirmiziyildiz:815283970820145213> ShadowRise Network Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Altın Logo__`,
      `<a:black_tik:815280959397691422> \`${prefix}altın [Yazı]\` Yazdıgınız Yazıyı Logoya Yansıtır.`,
      true
    )
    .addField(
      `__Alev Logo__`,
      `<a:black_tik:815280959397691422> \`${prefix}alev [Yazı]\` Yazdıgınız Yazıyı Logoya Yansıtır.`,
      true
    )
    .addField(
      `__Dinamik Logo__`,
      `<a:black_tik:815280959397691422> \`${prefix}dinamik [Yazı]\` Yazdıgınız Yazıyı Logoya Yansıtır.`,
      true
    )
    .addField(
      `__Elmas Logo__`,
      `<a:black_tik:815280959397691422> \`${prefix}elmas [Yazı]\` Yazdıgınız Yazıyı Logoya Yansıtır.`,
      true
    )
    .addField(
      `__Odun Logo__`,
      `<a:black_tik:815280959397691422> \`${prefix}odun [Yazı]\` Yazdıgınız Yazıyı Logoya Yansıtır.`,
      true
    )
    .addField(
      `__Neon Logo__`,
      `<a:black_tik:815280959397691422> \`${prefix}neon [Yazı]\` Yazdıgınız Yazıyı Logoya Yansıtır.`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:like:815282443086725151>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:like:815282443086725151> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:like:815282443086725151> \`${prefix}siteler\` | ShadowRise Network Sitelerini Görürsün`
    );
  return message.channel.send(embedlogo);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "logo",
  description: "Logo Menüsü",
  usage: "logo"
};
