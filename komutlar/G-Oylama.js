const Discord = require("discord.js");

let botadi = process.env.botadi;

exports.run = (client, message, args) => {
  message.delete();

  let question = args.join(" ");

  let user = message.author.username;

  if (!question)
    return message.channel
      .send(new Discord.MessageEmbed().setDescription(`<a:uyari:815530496871366657> Oylama Yapmak İçin Yazı Yazman Lazım`))
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

        .setColor("BLACK")
        .setThumbnail(
      "https://cdn.discordapp.com/attachments/814946376894513163/815870054843416576/3caed152951498ef3ff31ea94cb55f93.png"
    )
        .setTimestamp()
        .setFooter(`${botadi} | Oylama`)

        .addField(`**Oylama**`, `**${question}**`)
    )
    .then(function(message) {
      message.react("<a:evet:815534728493006858>");

      message.react("<a:hayir:815534736725901322>");
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
