const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;

  let userinfo = {};
  userinfo.avatar = user.avatarURL();
  message.channel.send(
    new Discord.MessageEmbed()
      .setColor("BLACK")
      .setDescription(
        `**${
          message.guild.members.cache.random().user.tag
        }** sunucudaki Ali Vefa sensin.`
      )
    .setFooter(
      `${message.author.username} tarafından istendi.`,
      userinfo.avatar
    )
      .setImage(
        "https://i.pinimg.com/originals/5a/28/de/5a28def9428afff43e86e21ffe382dc9.jpg"
      )
  );
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "alivefa",
  description: "Sunucudaki şanslı Ali Vefa'yı gösterir.",
  usage: "alivefa",
  kategori: "kullanıcı"
};
