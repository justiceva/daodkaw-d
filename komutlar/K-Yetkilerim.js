const Discord = require("discord.js");
const { stripIndents } = require("common-tags");

exports.run = (client, msg, args) => {
  let prefix = process.env.prefix;

  let x;
  let x2;
  let x3;
  let x4;
  let x5;
  let x6;
  let x7;
  let x8;
  let x9;
  let x10;
  let x11;

  //yönetici
  if (msg.member.hasPermission("ADMINISTRATOR"))
    x = "<:kabulet:822545421628342312>";
  if (!msg.member.hasPermission("ADMINISTRATOR"))
    x = "<:reddet:822546675221397584>";

  //Denetim kaydı
  if (msg.member.hasPermission("VIEW_AUDIT_LOG"))
    x2 = "<:kabulet:822545421628342312>";
  if (!msg.member.hasPermission("VIEW_AUDIT_LOG"))
    x2 = "<:reddet:822546675221397584>";

  //Sunucuyu yönet
  if (msg.member.hasPermission("MANAGE_GUILD"))
    x3 = "<:kabulet:822545421628342312>";
  if (!msg.member.hasPermission("MANAGE_GUILD"))
    x3 = "<:reddet:822546675221397584>";

  //Rolleri yönet
  if (msg.member.hasPermission("MANAGE_ROLES"))
    x4 = "<:kabulet:822545421628342312>";
  if (!msg.member.hasPermission("MANAGE_ROLES"))
    x4 = "<:reddet:822546675221397584>";

  //Kanalları yönet
  if (msg.member.hasPermission("MANAGE_CHANNELS"))
    x5 = "<:kabulet:822545421628342312>";
  if (!msg.member.hasPermission("MANAGE_CHANNELS"))
    x5 = "<:reddet:822546675221397584>";

  //üyeleri at
  if (msg.member.hasPermission("KICK_MEMBERS"))
    x6 = "<:kabulet:822545421628342312>";
  if (!msg.member.hasPermission("KICK_MEMBERS"))
    x6 = "<:reddet:822546675221397584>";

  //üyeleri yasakla
  if (msg.member.hasPermission("BAN_MEMBERS"))
    x7 = "<:kabulet:822545421628342312>";
  if (!msg.member.hasPermission("BAN_MEMBERS"))
    x7 = "<:reddet:822546675221397584>";

  //mesajları yönet
  if (msg.member.hasPermission("MANAGE_MESSAGES"))
    x8 = "<:kabulet:822545421628342312>";
  if (!msg.member.hasPermission("MANAGE_MESSAGES"))
    x8 = "<:reddet:822546675221397584>";

  //kullanıcı adlarını yönet
  if (msg.member.hasPermission("MANAGE_NICKNAMES"))
    x9 = "<:kabulet:822545421628342312>";
  if (!msg.member.hasPermission("MANAGE_NICKNAMES"))
    x9 = "<:reddet:822546675221397584>";

  //emojileri yönet
  if (msg.member.hasPermission("MANAGE_EMOJIS"))
    x10 = "<:kabulet:822545421628342312>";
  if (!msg.member.hasPermission("MANAGE_EMOJIS"))
    x10 = "<:reddet:822546675221397584>";

  //webhookları yönet
  if (msg.member.hasPermission("MANAGE_WEBHOOKS"))
    x11 = "<:kabulet:822545421628342312>";
  if (!msg.member.hasPermission("MANAGE_WEBHOOKS"))
    x11 = "<:reddet:822546675221397584>";

  msg.channel.send(
    new Discord.MessageEmbed()
      .setColor("#00ff00")
      .setAuthor(`ShadowRise Network | Yetkilerim Tablo`)
       .addField(
      `__Bilgilendirme__`,
      `<a:yesil:822529538663514173>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:yesil:822529538663514173> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:yesil:822529538663514173> \`${prefix}iletişim\` | ShadowRise İletişim Bilgileri.`
    )
      .setThumbnail(
      "https://media.discordapp.net/attachments/822526781839245332/822526805734850600/20210319_160634.png"
       )
      .setDescription(stripIndents`

${x} Yönetici
${x2} Denetim Kaydını Görüntüle
${x3} Sunucuyu Yönet
${x4} Rolleri Yönet
${x5} Kanalları Yönet
${x6} Üyeleri At
${x7} Üyeleri Yasakla
${x8} Mesajları Yönet
${x9} Kullanıcı Adlarını Yönet
${x10} Emojileri Yönet
${x11} Webhook'ları Yönet
     
   `)
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["izinlerim"],
  permLevel: 0,
  kategori: "kullanıcı"
};

exports.help = {
  name: "yetkilerim",
  description:
    "Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.",
  usage: "yetkilerim"
};
