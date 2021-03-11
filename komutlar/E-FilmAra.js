const Discord = require("discord.js");
const film = require("film-apisi");

exports.run = async (client, message, args) => {
   let user = message.mentions.users.first() || message.author;

  let userinfo = {};
  userinfo.avatar = user.avatarURL();
  if (!args.join(" "))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `<@${message.author.id}> | Aramam İçin Bir Şey Gerekiyor.`
        )
    );
  let c = await film.ara(args.join(" "));
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(c.ismi)
    .setThumbnail(c.poster)
    .addField("Yıldızlar:", c.yıldızlar)
    .addField("Tür:", c.tür)
    .addField("Puan:", c.puan)
    .addField("Yıl:", c.yıl)
    .addField("Süre:", c.süre)
    .addField("Sezon:", c.sezon)
    .addField("Bölüm:", c.bölüm)
    .addField("Benzerler:", c.benzerler)
  .setFooter(
      `${message.author.username} tarafından istendi.`,
      userinfo.avatar
    )
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["film-ara"],
  permLevel: 0
};

exports.help = {
  name: "film-ara",
  description: "imdb den arama yapmanızı sağlar",
  usage: "film-ara"
};
