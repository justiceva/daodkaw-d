const Discord = require(`discord.js`);

exports.run = async (client, message) => {
  let user = message.mentions.users.first() || message.author;
  if (user) {
    const embed = new Discord.MessageEmbed()
      .setAuthor(`${user.tag} Adlı Kullanıcının Avatarı »`)
      .setColor(`BLACK`)
      .setImage(user.displayAvatarURL({ dynamic: true }));
    message.channel.send(embed);
  } else {
    const embed = new Discord.MessageEmbed()
      .setAuthor(  `${message.author.tag} Adlı Kullanıcının Avatarı »`,
        message.author.avatarURL)
      .setColor(`BLACK`)
      .setImage(message.author.avatarURL({ dynamic: true }));
    message.channel.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["avatar", "avatarım"],
  permLevel: 0
};

exports.help = {
  name: "avatar"
};
