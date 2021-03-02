const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const botbilgi = new Discord.MessageEmbed()
    .setAuthor(`© ShadowRise Network | Bot Bilgi`)
    .setTitle(``)
    .setColor(`BLACK`)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/814946376894513163/815870054843416576/3caed152951498ef3ff31ea94cb55f93.png"
    )
    .setDescription(
      `<a:kirmiziyildiz:815283970820145213> ShadowRise Network Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      "__**Bot Verileri**__",
      `<a:black_tik:815280959397691422> **Toplam Sunucu** **|**  **${
        client.guilds.cache.size
      }** \n <a:black_tik:815280959397691422> **Toplam Kullanıcı** **|** **${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}** \n <a:black_tik:815280959397691422> **Toplam Kanal** **|** **${
        client.channels.cache.size
      }**`
    )
    .addField(
      "__**Bot Geliştiricisi**__",
      "<a:like:815282443086725151> **Sunucu Sahipileri**  <@802181483170103316> | <@595178859968856074> \n **OrhanEmin#0819** | **Laxquer_#7207** \n\n <a:like:815282443086725151> **Bot Geliştiricisi**  <@802181483170103316> \n **OrhanEmin#0819** \n\n"
    )
    .addField(
      "__**Sürümler**__",
      `<a:bit:815283242479124511> **Discord.js Sürümü** **|**  **v${Discord.version}** \n <a:bit:815283242479124511> **Node.js Sürümü** **|**  **${process.version}**`
    )
    .addField(
      "__**Gecikmeler**__",
      `<a:music:815560660699447316> **${client.ws.ping}** ms`,
      true
    )
     .addField(
      `__Bilgilendirme__`,
      `<a:like:815282443086725151>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:like:815282443086725151> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:like:815282443086725151> \`${prefix}siteler\` | ShadowRise Network Sitelerini Görürsün`
    );
  return message.channel.send(botbilgi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "botbilgi",
  description: "",
  usage: ""
};
