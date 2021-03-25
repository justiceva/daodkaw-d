const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const botbilgi = new Discord.MessageEmbed()
    .setAuthor(`ShadowRise Network | Discord Bot Bilgi Tablosu`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/823592301796392960/824619745192968263/a3935a550c559f47bb1e870681a4384f-removebg-preview.png"
    )
    .setDescription(
      `<a:tik:822531200353959937> ShadowRise Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      "__**Bot Verileri**__",
      `<:rules:822553517226590271> **Toplam Sunucu** **|**  \`${
        client.guilds.cache.size
      }\` \n <:rules:822553517226590271> **Toplam Kullanıcı** **|** \`${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}\` \n <:rules:822553517226590271> **Toplam Kanal** **|** \`${
        client.channels.cache.size
      }\``
    )
    .addField(
      "__**Yetkili Bilgi**__",
      "<:tac:822552060552937542> **Sunucu Sahipleri**  \n <@714096745692397678> | <@786226634466000906> \n **EmreKrbrn#4952** | **Mrt#3307** \n\n <a:green:822530401301954632> **Kurucular** \n <@802181483170103316> \n **OrhanEmin#0819** \n\n"
    )
    .addField(
      "__**Sürümler**__",
      `<a:guard:822552681863315516> **Discord.js Sürümü** **|**  \`v${Discord.version}\` \n <a:guard:822552681863315516>  **Node.js Sürümü** **|**  \`${process.version}\``
    )
    .addField(
      "__**Gecikmeler**__",
      `<a:sinyal:822553082889633794> \`${client.ws.ping}\` **MS**`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:yesil:822529538663514173>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:yesil:822529538663514173> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:yesil:822529538663514173> \`${prefix}iletişim\` | ShadowRise İletişim Bilgileri.`
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
