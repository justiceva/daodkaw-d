const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const embedkullanıcı = new Discord.MessageEmbed()
    .setAuthor(`© ShadowRise Network | Kullanıcı`)
    .setTitle(``)
    .setColor(`BLACK`)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/814946376894513163/815870054843416576/3caed152951498ef3ff31ea94cb55f93.png"
    )
    .setDescription(
      `<a:kirmiziyildiz:815283970820145213> ShadowRise Network Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Rozetler__`,
      `<a:black_tik:815280959397691422> \`${prefix}rozetler\` Komutu Yazarak Hangi Rozetleriniz Var Görürsünüz.`,
      true
    )
    .addField(
      `__Profil__`,
      `<a:black_tik:815280959397691422> \`${prefix}profil\` Kullanıcı Profili 'ni Görür.`,
      true
    )
    .addField(
      `__Avatarım__`,
      `<a:black_tik:815280959397691422> \`${prefix}avatar\` Avatarını Görürsün.`,
      true
    )
    .addField(
      `__Bot Bilgi__`,
      `<a:black_tik:815280959397691422> \`${prefix}botbilgi\` Botun İstatistiklerini Görürsün.`,
      true
    )
    .addField(
      `__Rol Bilgi__`,
      `<a:black_tik:815280959397691422> \`${prefix}rolbilgi [@Rol]\` Rolün Bilgilerini Gösterir.`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:like:815282443086725151>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:like:815282443086725151> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:like:815282443086725151> \`${prefix}siteler\` | ShadowRise Network Sitelerini Görürsün`
    );
  return message.channel.send(embedkullanıcı);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kullanıcı",
  description: "kullanıcı Menüsü",
  usage: "kullanıcı"
};
