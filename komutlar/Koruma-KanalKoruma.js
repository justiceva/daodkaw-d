const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let prefix = process.env.prefix;

  if (!args[0]) {
    const sa = new Discord.MessageEmbed()
      .setColor(`BLACK`)
      .setDescription(
        `<a:hayir:815534736725901322> Kanal koruma sistemi açmak için: ${prefix}kanal-koruma aç/kapat`
      )
      .setTimestamp();
    return message.channel.send(sa);
  }
  if (args[0] === "aç") {
    db.set(`kanalk_${message.guild.id}`, "Aktif");
    const sa = new Discord.MessageEmbed()
      .setColor(`BLACK`)
      .setDescription(
        `<a:evet:815534728493006858> Kanal koruma sistemi başarıyla açıldı!`
      )
      .setTimestamp();
    return message.channel.send(sa);
  }
  if (args[0] === "kapat") {
    db.delete(`kanalk_${message.guild.id}`);
    const sa = new Discord.MessageEmbed()
      .setColor(`BLACK`)
      .setDescription(
        `<a:evet:815534728493006858> Kanal koruma sistemi başarıyla Kapatıldı!`
      )
      .setTimestamp();
    return message.channel.send(sa);
  }
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "kanal-koruma"
};
