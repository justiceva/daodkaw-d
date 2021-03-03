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
        .setDescription(
          `<a:unlem:816363628282249266> **Yanlış Kullanım** \n Doğru Kullanım: \`sn!dinamik [Yazı]\``
        )
    );
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/f802ad87-f5ae-491f-9a02-89ee701b588f/logo?v=4&text=${yazi}`.replace(
    " ",
    "+"
  );

  const embed = new Discord.MessageEmbed()
    .setTitle("Dinamik Logo")
    .setColor("BLACK")
    .setImage(linqo)
    .setFooter(
      `${message.author.username} tarafından istendigi. Dinamik Logo`,
      userinfo.avatar
    );
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yazıfoto", "yazı-foto"],
  permLevel: 0
};

exports.help = {
  name: "dinamik",
  description: "Yazdığınız yazıyı dinamik çevirir.",
  usage: "dinamik <yazı>"
};
