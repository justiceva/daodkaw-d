const Discord = require("discord.js");
const moment = require("moment");
const db = require("quick.db");
const client = new Discord.Client();
require("moment-duration-format");
const prefix = process.env.prefix;
exports.run = async (bot, msg, args) => {
  const çekiliş = new Discord.MessageEmbed()
    .setAuthor(`© ShadowRise Network | OtoRol Sistem`)
    .setTitle(``)
    .setColor(`BLACK`)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/814942471792361522/816656849310318592/3caed152951498ef3ff31ea94cb55f93.png"
    )
    .setDescription(
      `<a:kirmiziyildiz:815283970820145213> ShadowRise Network Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__OtoRol Rol Ayarlama__** `,
      `<a:black_tik:815280959397691422>  \`${prefix}otorol rol-ayarla [@Rol]\` \n OtoRol Rol Ayarlama `,
      true
    )
    .addField(
      `**__OtoRol Kanal Ayarlama__** `,
      `<a:black_tik:815280959397691422>  \`${prefix}otorol kanal-ayarla [#Kanal]\` \n OtoRol Kanal Ayarlama `,
      true
    )
    .addField(
      `**__OtoRol Rol Sıfırla__** `,
      `<a:black_tik:815280959397691422>  \`${prefix}otorol rol-sıfırla\` \n OtoRol Rol Ayarlarını Sıfırlar `,
      false
    )
    .addField(
      `**__OtoRol Kanal Sıfırla__** `,
      `<a:black_tik:815280959397691422>  \`${prefix}otorol kanal-sıfırla\` \n OtoRol Kanal Ayarlarını Sıfırlar `,
      false
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:like:815282443086725151>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:like:815282443086725151> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:like:815282443086725151> \`${prefix}siteler\` | ShadowRise Network Sitelerini Görürsün`
    );
  msg.channel.send(çekiliş);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["autorole-sistem"],
  permLevel: 0
};
exports.help = {
  name: "otorol-sistem",
  description: "",
  usage: ""
};
