const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const ayarlar = require("../ayarlar.json");
  let prefix = ayarlar.prefix;
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send(
      new Discord.MessageEmbed() .setColor("BLACK").setDescription(
      "Bu komutu kullanabilmek için `Sunucuyu yönet` yetkisine sahip olmalıısn"
        )
    );

  let kanal = message.mentions.channels.first() || args[0];
  if (!kanal)
    return message.channel.send( new Discord.MessageEmbed() .setColor("BLACK").setDescription(
      "<a:hayir:815534736725901322> | Güvenlik Mesajlarının Gideceği Kanalı Etiketlemedin."
      )
    );
  else {
    db.set(`güvenlik.${message.guild.id}`, kanal.id);
    return message.channel.send(
      new Discord.MessageEmbed() .setColor("BLACK").setDescription(
      "Güvenlik kanalı <#" + kanal + "> olarak ayarlandı"
        )
    );
  }
  if (args[0] === "sıfırla") {
    db.delete(`güvenlik.${message.guild.id}`);
    message.channel.send(new Discord.MessageEmbed() .setColor("BLACK").setDescription("<a:evet:815534728493006858> | Güvenlik Kanalı Başarıyla Sıfırlandı."));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 0
};

exports.help = {
  name: "güvenlik",
  description: "Güvenlik kanalını ayarlarsınız.",
  usage: "güvenlik #kanal"
};
