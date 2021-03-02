const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const embedeğlence = new Discord.MessageEmbed()
    .setAuthor(`© ShadowRise Network | Eğlence`)
    .setTitle(``)
    .setColor(`BLACK`)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/814946376894513163/815870054843416576/3caed152951498ef3ff31ea94cb55f93.png"
    )
    .setDescription(
      `<a:kirmiziyildiz:815283970820145213> ShadowRise Network Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Steam Oyun__`,
      `<a:black_tik:815280959397691422> \`${prefix}steamoyun [Oyun]\` Yazdıgınız Oyunun Steamdaki Bilgileri Verir.`,
      true
    )
    .addField(
      `__Minecraft Ödül__`,
      `<a:black_tik:815280959397691422> \`${prefix}mcödül \` Yazdıgınız Cümleyi Minecraft Ödüle Aktarır.`,
      true
    )
    .addField(
      `__TKM__`,
      `<a:black_tik:815280959397691422> \`${prefix}tkm [Seçtigin] \` Botla Taş , Kağıt Ve Makas Oynarsın.`,
      true
    )
    .addField(
      `__Kasa Aç__`,
      `<a:black_tik:815280959397691422> \`${prefix}kasaaç \` CS:GO Kasası Açar.`,
      true
    )
    .addField(
      `__Trump Tweet__`,
      `<a:black_tik:815280959397691422> \`${prefix}trumptweet [Yazı] \` Trump Yazı Yazdırırsın.`,
      true
    )
    .addField(
      `__Zar At__`,
      `<a:black_tik:815280959397691422> \`${prefix}zarat \` 1 'den 5 kadar Zar Atar.`,
      true
    )
  .addField(
      `__Deste Aç__`,
      `<a:black_tik:815280959397691422> \`${prefix}desteaç \` Zula Deste Kasası Açar.`,
      true
    )
   .addField(
      `__Minecraft Skin__`,
      `<a:black_tik:815280959397691422> \`${prefix}mcskin \` Minecraft Skini Arar.`,
      true
    )
   .addField(
      `__Ata Sözü__`,
      `<a:black_tik:815280959397691422> \`${prefix}atasözü \` Ata Sözü Söyler.`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:like:815282443086725151>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:like:815282443086725151> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:like:815282443086725151> \`${prefix}siteler\` | ShadowRise Network Sitelerini Görürsün`
    );
  return message.channel.send(embedeğlence);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "eğlence",
  description: "Eğlence Menüsü",
  usage: "eğlence"
};
