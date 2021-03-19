const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const fynxcode = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setAuthor(`ShadowRise Network | Davet Menü`)
    .setDescription(
      `**<:sag:822547800481988628> Botun Davet Linki [TIKLA](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)**\n\n**__Web Sitemiz Çok Yakında Sizlerle__**`
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:yesil:822529538663514173>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:yesil:822529538663514173> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:yesil:822529538663514173> \`${prefix}iletişim\` | ShadowRise İletişim Bilgileri.`
    )
    .setThumbnail(
      "https://media.discordapp.net/attachments/822526781839245332/822526805734850600/20210319_160634.png"
    );

  return message.channel.send(fynxcode);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "Davet Menüsü",
  usage: ""
};
