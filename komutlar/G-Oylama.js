const Discord = require("discord.js");

let botadi = process.env.botadi;

exports.run = (client, message, args) => {
  message.delete();

  let question = args.join(" ");

  let user = message.author.username;

  if (!question)
    return message.channel
      .send(
        new Discord.MessageEmbed()
              .setColor("#00ff00")
          .setDescription(
            `<a:unlem:822546045706698763> **Yanlış Kullanım** \n Oylama Yapmak İçin Yazı Yazman Lazım`
          )
      )
      .then(m => m.delete(5000));

  console.log(
    "oylama komutu " +
      message.author.username +
      "#" +
      message.author.discriminator +
      " tarafından kullanıldı."
  );
  message.channel
    .send(
      new Discord.MessageEmbed()

        .setColor("#00ff00")
        .setThumbnail(
          "https://media.discordapp.net/attachments/822526781839245332/822526805734850600/20210319_160634.png"
        )
        .setTimestamp()
        .setFooter(`ShadowRise Network | Oylama`)

        .addField(`**__Oylama__**`, `**${question}**`)
    )
    .then(function(message) {
      message.react("<:kabulet:822545421628342312>");

      message.react("<:reddet:822546675221397584>");
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oylama"],

  permLevel: 2
};

exports.help = {
  name: "oylama",
  description: "Oylama yapmanızı sağlar.",
  usage: "oylama <oylamaismi>"
};
