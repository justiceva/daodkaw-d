const Discord = require("discord.js");

const prefix = process.env.prefix;
exports.run = async (bot, msg, args) => {
  const çekiliş = new Discord.MessageEmbed()
    .setAuthor(`Shadow  | Ticket Sistem`)
    .setTitle(``)
   .setImage(
      "https://cdn.discordapp.com/attachments/824633401096011862/824659950893531156/standard.gif"
    )
    .setColor(`#ee7621`)
     .setThumbnail(
      "https://cdn.discordapp.com/attachments/823592301796392960/824619745192968263/a3935a550c559f47bb1e870681a4384f-removebg-preview.png"
    )
    .setDescription(
      `<a:green:822530401301954632> Shadow Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__Ticket__** `,
      `<a:green:822530401301954632>  \`${prefix}bilet\` \nTicketi tekrar açar. Ticketi siler `,
      true
    )
    .addField(
      `**__Ticket Kapat__**`,
      `<a:green:822530401301954632>  \`${prefix}kapat\` \nTicketi 5 saniyede siler`,
      true
    )
    .addField(
      `**__Ticket Kanal__**`,
      `<a:green:822530401301954632>  \`${prefix}ticket-kanal\` \nTicket Gittiği Kanalı Ayarlar`,
      true
    )
    .addField(
      `**__Ticket Kaldır__**`,
      `<a:green:822530401301954632>  \`${prefix}ticket-kaldır\` \nTicket Kanalını Kaldırır`,
      true
    )
    .addField(
      `**__Ticket Ekle__**`,
      ` <a:green:822530401301954632> \`${prefix}ticket-ekle\` \nTicket Ekler`,

      true
    )
    .addField(
      `**__Ticket Aç__**`,
      ` <a:green:822530401301954632>  \`${prefix}ticket-aç\` \nTicket Açar`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:yesil:822529538663514173>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:yesil:822529538663514173> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:yesil:822529538663514173> \`${prefix}iletişim\` | ShadowRise İletişim Bilgileri.`
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
 