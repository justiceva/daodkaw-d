const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let prefix = process.env.prefix;
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send(
      new Discord.MessageEmbed() .setColor("BLACK").setDescription(
      `<@${message.author.id}> | Bu komutu kullanabilmek için \`Sunucuyu yönet\` yetkisine sahip olmalısın`
    )
      );

  let kanal = message.mentions.channels.first() || args[0];
  if (!kanal)
    return message.channel.send(
       new Discord.MessageEmbed() .setColor("BLACK").setDescription(
      `<a:hayir:815534736725901322> | Güvenlik mesajlarının gideceği kanalı etiketlemedin`
         )
    );
  else {
    db.set(`güvenlik.${message.guild.id}`, kanal.id);
    return message.channel.send(
       new Discord.MessageEmbed() .setColor("BLACK").setDescription(
      "<:rules:816959237439750155> | Güvenlik Kanalı <#" + kanal + "> Olarak Ayarlandı."
         )
    );
  }
  if (args[0] === "sıfırla") {
    db.delete(`güvenlik.${message.guild.id}`);
    message.channel.send(
      new Discord.MessageEmbed() .setColor("BLACK").setDescription(`<a:evet:815534728493006858> | Başarıyla Güvenlik Kanalı Sıfırlandı.`)
    );
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
