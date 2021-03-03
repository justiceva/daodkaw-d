const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join("+");

    let user = message.mentions.users.first() || message.author;

  let userinfo = {};
  userinfo.avatar = user.avatarURL();
  if (!yazi)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`<a:unlem:816363628282249266> **Yanlış Kullanım** \n Doğru Kullanım: \`sn!altın [Yazı]\``)
    );
  const linqo = `https://habbofont.net/font/steampunk/${yazi}.gif`.replace(
    " ",
    "+"
  );

  const narcosembed = new Discord.MessageEmbed()
    .setTitle("Altın Logo")
    .setColor("BLACK")
    .setImage(linqo)
    .setFooter(
      `${message.author.username} tarafından istendigi. Altın Logo`,
      userinfo.avatar
    )
  message.channel.send(narcosembed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["altın-logo"],
  permLevel: 0
};

exports.help = {
  name: "altın",
  description: "Yazdığınız yazıyı dinamik çevirir.",
  usage: "altın"
};
