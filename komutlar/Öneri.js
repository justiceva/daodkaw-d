const Discord = require("discord.js");

exports.run = function(client, message, args) { 
   var öneri = [
      'https://wallpaper.dog/large/10816358.png','https://media.discordapp.net/attachments/814947046405570581/817140239859580948/indir.jpg'];

      var öneriler = öneri[Math.floor(Math.random() * öneri.length)];
  var öneri = args.slice(0).join(" ");
  var guildID = "814905098505420820";
  var channelID = "814942665027616838";

  if (!öneri) {
    return message.reply(
      "Bir mesaj belirtin! Doğru kullanım: **byf!öneri <mesaj>**"
    );
  } else {
    var embed = new Discord.MessageEmbed()
      .setTimestamp()
      .setAuthor(`${message.author.username}`)
    .setThumbnail(öneriler)
      .setDescription("```" + öneri + "```");

    client.guilds.cache
      .get(guildID)
      .channels.cache.get(channelID)
      .send(embed);
    message.channel.send("Öneriniz alınmıştır! Teşekkür ederiz.");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner"],
  permLevel: 0
};

exports.help = {
  name: "öneri",
  description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır",
  usage: "öneri <mesaj>"
};
