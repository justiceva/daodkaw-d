const Discord = require("discord.js");

const prefix = process.env.prefix;
exports.run = async (bot, msg, args) => {
  const çekiliş = new Discord.MessageEmbed()
    .setAuthor(`Shadow  | Ticket Sistem`)
    .setTitle(``)
   .setImage(
      "s"
    )
    .setColor(`#ee7621`)
     .setThumbnail(
      "s"
    )
    .setDescription(
      `<:yildiz:819973383667056680> RabiHost Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__Ticket__** `,
      `<a:turuncu:822084547386146836>  \`${prefix}bilet\` \nTicketi tekrar açar. Ticketi siler `,
      true
    )
    .addField(
      `**__Ticket Kapat__**`,
      `<a:turuncu:822084547386146836>  \`${prefix}kapat\` \nTicketi 5 saniyede siler`,
      true
    )
    .addField(
      `**__Ticket Kanal__**`,
      `<a:turuncu:822084547386146836>  \`${prefix}ticket-kanal\` \nTicket Gittiği Kanalı Ayarlar`,
      true
    )
    .addField(
      `**__Ticket Kaldır__**`,
      `<a:turuncu:822084547386146836>  \`${prefix}ticket-kaldır\` \nTicket Kanalını Kaldırır`,
      true
    )
    .addField(
      `**__Ticket Ekle__**`,
      ` <a:turuncu:822084547386146836> \`${prefix}ticket-ekle\` \nTicket Ekler`,

      true
    )
    .addField(
      `**__Ticket Aç__**`,
      ` <a:turuncu:822084547386146836>  \`${prefix}ticket-aç\` \nTicket Açar`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:logo:822085656540610591>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:logo:822085656540610591> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:logo:822085656540610591> \`${prefix}siteler\` | CruzyHost Sitelerini Görürsün`
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
 