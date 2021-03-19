const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const botbilgi = new Discord.MessageEmbed()
    .setAuthor(`CruzyHost Bilişim Merkezi | Bot Bilgi`)
    .setTitle(``)
    .setColor(`#ee7621`)
    .setThumbnail(
      "https://cdn.discordapp.com/icons/818740312293376000/a_9c062cea607a11f22199bda24788785a.gif?size=128"
    )
    .setDescription(
      `<:yildiz:819973383667056680> CruzyHost Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      "__**Bot Verileri**__",
      `<:rules:819989990636912730> **Toplam Sunucu** **|**  **${
        client.guilds.cache.size
      }** \n <:rules:819989990636912730> **Toplam Kullanıcı** **|** **${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}** \n <:rules:819989990636912730> **Toplam Kanal** **|** **${
        client.channels.cache.size
      }**`
    )
    .addField(
      "__**Yetkili Bilgi**__",
      "<a:green:822530401301954632> **Sunucu Sahipleri**  \n <@714096745692397678> | <@786226634466000906> \n **EmreKrbrn#4952** | **Mrt#3307** \n\n <a:green:822530401301954632> **Kurucular** \n <@802181483170103316> \n **OrhanEmin#0819** \n\n"
    )
    .addField(
      "__**Sürümler**__",
      `<a:son:819980436884160523> **Discord.js Sürümü** **|**  **v${Discord.version}** \n <a:son:819980436884160523> **Node.js Sürümü** **|**  **${process.version}**`
    )
    .addField(
      "__**Gecikmeler**__",
      `<a:beyaz:819989804694634532> **${client.ws.ping}** ms`,
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
