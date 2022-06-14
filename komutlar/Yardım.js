const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {
  let prefix = ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
    .setAuthor(`Windes`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://i.pinimg.com/originals/5a/28/de/5a28def9428afff43e86e21ffe382dc9.jpg"
    )
    .setDescription(
      `🎧 Windes Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Genel Komutlar__`,
      `💬 \`${prefix}genel\``,
      true
    )
    .addField(
      `__Ayarlar Komutlar__`,
      `⚙️  \`${prefix}ayarlar\` `,
      true
    )
    .addField(
      `__Sunucu Koruma(Bakımda)__`,
      `🔰 \`${prefix}koruma\`  `,
      true
    )
    .addField(
      `__Sunucu Ayarlar(Bakımda)__`,
      `⚙️ \`${prefix}sunucu\` `,
      true
    )
    .addField(
      `__Kullanıcı Komutlar__`,
      `🌀 \`${prefix}kullanıcı\` `,
      true
    )
    .addField(
      `__Oyun Komutlar(Bakımda)__`,
      ` 🎮 \`${prefix}oyunlar\` `,
      true
    )
    .addField(
      `__Ticket__`,
      `🎉 \`${prefix}setup\` `,
      true
    )
    .addField(
      `__Sistemler__`,
      `🎏 \`${prefix}eklenti\``,
      true
    )
    .addField(
      `__Eğlence Komutlar__`,
      `🎲 \`${prefix}eğlence\``,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `🔱  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🔱 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 🔱 \`${prefix}iletişim\` | Gweep Creative  İletişim Bilgileri.`
    );
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Yardım Menüsü",
  usage: "yardım"
};
