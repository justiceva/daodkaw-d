const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let botadi = process.env.botadi;

  let user = message.mentions.users.first() || message.author;

  let userinfo = {};
  userinfo.avatar = user.avatarURL();
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(
      "Bu Komutu Kullanmak İçin **Yönetici** Yetkisine Sahip Olmalısın!"
    );

  if (!args[0])
    return message.channel.send(
      "Sa-as yazısını açmak için; k.`sa-as aç veya kapat`"
    );

  if (args[0] == "aç") {
    db.set(`saas_${message.guild.id}`, "açık");

    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setTitle(`${botadi} | Selam Sistem`)
      .setDescription("**__SA-AS Sistem Açıldı__**")
      .setFooter(
        `${message.author.username} tarafından istendi.`,
        userinfo.avatar
      )
      .setTimestamp();
    return message.channel.send(embed);
  }

  if (args[0] == "kapat") {
    db.set(`saas_${message.guild.id}`, "kapali");

    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
     .setTitle(`${botadi} | Selam Sistem`)
      .setFooter(
        `${message.author.username} tarafından istendi.`,
        userinfo.avatar
      )
      .setDescription("**__SA-AS Sistem Kapatıldı__**")
      .setTimestamp();
    return message.channel.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "sa-as",
  description: "Selamün aleyküm, Aleyküm selam",
  usage: "sa-as"
};
