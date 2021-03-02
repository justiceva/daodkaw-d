const Discord = require("discord.js");
const moment = require("moment");
const db = require("quick.db");
const client = new Discord.Client();
require("moment-duration-format");
const prefix = process.env.prefix;
exports.run = async (bot, msg, args) => {
  const seviye = new Discord.MessageEmbed()
    .setAuthor(`© ShadowRise Network | Seviye Sistem`)
    .setTitle(``)
    .setColor(`BLACK`)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/814946376894513163/815870054843416576/3caed152951498ef3ff31ea94cb55f93.png"
    )
    .setDescription(
      `<a:kirmiziyildiz:815283970820145213> ShadowRise Network Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__Seviye__**`,
      `<a:black_tik:815280959397691422> \`${prefix}rank\` \nKullanıcı Seviyesi Görür.`,
      true
    )
    .addField(
      `**__Seviye Kanal__**`,
      `<a:black_tik:815280959397691422> \`${prefix}seviye-kanal-ayarla\` \n Seviye Kanal Ayarlar.`,
      true
    )
    .addField(
      `**__Seviye Mesaj__**`,
      `<a:black_tik:815280959397691422> \`${prefix}seviye-msg-ayarla\` \n Seviye Mesaj Ayarlar.`,
      true
    )
    .addField(
      `**__Seviye Mesaj Sıfırla__**`,
      `<a:black_tik:815280959397691422> \`${prefix}seviye-msg-sıfırla\` \n Seviye Mesaj Ayarlarını Sıfırlar.`,
      true
    )
    .addField(
      `**__Not__**`,
      `Arkadaşlar Bu V1 Sürümüdür Yakında En Gelişmiş Seviye Getirecez`
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:like:815282443086725151>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:like:815282443086725151> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:like:815282443086725151> \`${prefix}siteler\` | ShadowRise Network Sitelerini Görürsün`
    );
  msg.channel.send(seviye);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["", ""],
  permLevel: 0
};
exports.help = {
  name: "seviye-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "seviye"
};
