const Discord = require("discord.js");
const moment = require("moment");
const db = require("quick.db");
const client = new Discord.Client();
require("moment-duration-format");
const prefix = process.env.prefix;
exports.run = async (bot, msg, args) => {
  const çekiliş = new Discord.MessageEmbed()
    .setAuthor(`© ShadowRise Network | Ticket Sistem`)
    .setTitle(``)
    .setColor(`BLACK`)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/814946376894513163/815870054843416576/3caed152951498ef3ff31ea94cb55f93.png"
    )
    .setDescription(
      `<a:kirmiziyildiz:815283970820145213> ShadowRise Network Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__Ticket__** `,
      `<a:black_tik:815280959397691422>  \`${prefix}bilet\` \nTicketi tekrar açar. Ticketi siler `,
      true
    )
    .addField(
      `**__Ticket Kapat__**`,
      `<a:black_tik:815280959397691422>  \`${prefix}kapat\` \nTicketi 5 saniyede siler`,
      true
    )
    .addField(
      `**__Ticket Kanal__**`,
      `<a:black_tik:815280959397691422>  \`${prefix}ticket-kanal\` \nTicket Gittiği Kanalı Ayarlar`,
      true
    )
    .addField(
      `**__Ticket Kaldır__**`,
      `<a:black_tik:815280959397691422>  \`${prefix}ticket-kaldır\` \nTicket Kanalını Kaldırır`,
      true
    )
    .addField(
      `**__Ticket Ekle__**`,
      ` <a:black_tik:815280959397691422> \`${prefix}ticket-ekle\` \nTicket Ekler`,

      true
    )
    .addField(
      `**__Ticket Aç__**`,
      ` <a:black_tik:815280959397691422>   \`${prefix}ticket-aç\` \nTicket Açar`,
      true
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
  aliases: ["bilet-sistem"],
  kategori: "yardım",
  permLevel: 0
};
exports.help = {
  name: "ticket-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: ""
};
