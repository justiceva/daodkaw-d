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
    x = "<a:evet:815534728493006858>";
  if (!msg.member.hasPermission("ADMINISTRATOR"))
    x = "<a:hayir:815534736725901322>";

  //Denetim kaydı
  if (msg.member.hasPermission("VIEW_AUDIT_LOG"))
    x2 = "<a:evet:815534728493006858>";
  if (!msg.member.hasPermission("VIEW_AUDIT_LOG"))
    x2 = "<a:hayir:815534736725901322>";

  //Sunucuyu yönet
  if (msg.member.hasPermission("MANAGE_GUILD"))
    x3 = "<a:evet:815534728493006858>";
  if (!msg.member.hasPermission("MANAGE_GUILD"))
    x3 = "<a:hayir:815534736725901322>";

  //Rolleri yönet
  if (msg.member.hasPermission("MANAGE_ROLES"))
    x4 = "<a:evet:815534728493006858>";
  if (!msg.member.hasPermission("MANAGE_ROLES"))
    x4 = "<a:hayir:815534736725901322>";

  //Kanalları yönet
  if (msg.member.hasPermission("MANAGE_CHANNELS"))
    x5 = "<a:evet:815534728493006858>";
  if (!msg.member.hasPermission("MANAGE_CHANNELS"))
    x5 = "<a:hayir:815534736725901322>";

  //üyeleri at
  if (msg.member.hasPermission("KICK_MEMBERS"))
    x6 = "<a:evet:815534728493006858>";
  if (!msg.member.hasPermission("KICK_MEMBERS"))
    x6 = "<a:hayir:815534736725901322>";

  //üyeleri yasakla
  if (msg.member.hasPermission("BAN_MEMBERS"))
    x7 = "<a:evet:815534728493006858>";
  if (!msg.member.hasPermission("BAN_MEMBERS"))
    x7 = "<a:hayir:815534736725901322>";

  //mesajları yönet
  if (msg.member.hasPermission("MANAGE_MESSAGES"))
    x8 = "<a:evet:815534728493006858>";
  if (!msg.member.hasPermission("MANAGE_MESSAGES"))
    x8 = "<a:hayir:815534736725901322>";

  //kullanıcı adlarını yönet
  if (msg.member.hasPermission("MANAGE_NICKNAMES"))
    x9 = "<a:evet:815534728493006858>";
  if (!msg.member.hasPermission("MANAGE_NICKNAMES"))
    x9 = "<a:hayir:815534736725901322>";

  //emojileri yönet
  if (msg.member.hasPermission("MANAGE_EMOJIS"))
    x10 = "<a:evet:815534728493006858>";
  if (!msg.member.hasPermission("MANAGE_EMOJIS"))
    x10 = "<a:hayir:815534736725901322>";

  //webhookları yönet
  if (msg.member.hasPermission("MANAGE_WEBHOOKS"))
    x11 = "<a:evet:815534728493006858>";
  if (!msg.member.hasPermission("MANAGE_WEBHOOKS"))
    x11 = "<a:hayir:815534736725901322>";

  msg.channel.send(
    new Discord.MessageEmbed()
      .setColor("BLACK")
      .setAuthor(`© ShadowRise Network  | Yetkilerim`)
      .addField(
        `__Bilgilendirme__`,
        `<a:like:815282443086725151>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:like:815282443086725151> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:like:815282443086725151> \`${prefix}siteler\` | ShadowRise Network Sitelerini Görürsün`
      )
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/814942471792361522/816656849310318592/3caed152951498ef3ff31ea94cb55f93.png"
      ).setDescription(stripIndents`

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
