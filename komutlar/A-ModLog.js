const Discord = require("discord.js");
const db = require("quick.db");
const client = new Discord.Client();

const prefix = process.env.prefix;

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(
      `<a:hayir:815534736725901322> **Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!**`
    );

  let modlogs = db.get(`modlogkanaly_${message.guild.id}`);

  if (!modlogs) {
    let kanal = message.mentions.channels.first();
    if (!kanal)
      return message.reply(
        `<a:hayir:815534736725901322> **Lütfen bir kanal giriniz!** \n> **Doğru Kullanım;** \`${prefix}mod-log <#kanal>\``
      );

    db.set(`modlogkanaly_${message.guild.id}`, kanal.id);
    const modlogkanal = message.guild.channels.cache.find(
      kanal => kanal.id === modlogs
    );
    const mdlgayar = new Discord.MessageEmbed()
      .setColor(`BLACK`)
      .setDescription(
        `<a:evet:815534728493006858> **Modlog kanalı başarılı bir şekilde ayarlandı.**`
      );
    message.channel.send(mdlgayar);
  } else {
    if (modlogs) {
      const modlogkanal = message.guild.channels.cache.find(
        kanal => kanal.id === modlogs
      );
      const mdlgsfr = new Discord.MessageEmbed()
        .setColor(`BLACK`)
        .setDescription(
          `<a:hayir:815534736725901322> **Bu sunucuda daha önceden modlog kanalı ayarlanmış. Sıfırlamak için:** \`${prefix}mod-log-sıfırla\`\n**Ayarlanan kanal:** \`${modlogkanal.name}\``
        );
      return message.channel.send(mdlgsfr);
    }
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["modlog"],
  permLevel: 0
};

exports.help = {
  name: "mod-log",
  description: "Log kanalını belirler.",
  usage: "mod-log-ayarla <#kanal>"
};
