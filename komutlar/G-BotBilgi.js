const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const botbilgi = new Discord.MessageEmbed()
    .setAuthor(`SelmanEmin | Discord Bot Bilgi Tablosu`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/823592301796392960/826048182990667806/standard_2.gif"    )
    .setDescription(
      `📯 SelmanEmin Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      "__**Bot Verileri**__",
      `📗 **Toplam Sunucu** **|**  \`${
        client.guilds.cache.size
      }\` \n 📗 **Toplam Kullanıcı** **|** \`${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}\` \n 📗 **Toplam Kanal** **|** \`${
        client.channels.cache.size
      }\``
    )
    .addField(
      "__**Yetkili Bilgi**__",
      "👑 **Sunucu Sahipleri**  \n @SelmanEmin#9503  | <@786226634466000906> \n **SelmanEmin#9503** |  **Kurucular** \n < \n **SelmanEmin#9503* \n\n"
    )
    .addField(
      "__**Sürümler**__",
      `@SelmanEmin#9503🥽 **Discord.js Sürümü** **|**  \`v${Discord.version}\` \n 🦺  **Node.js Sürümü** **|**  \`${process.version}\``
    )
    .addField(
      "__**Gecikmeler**__",
      `🩱 \`${client.ws.ping}\` **MS**`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `🎓  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🎓 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 🎓 \`${prefix}iletişim\` | SelmanEmin İletişim Bilgileri.`
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
