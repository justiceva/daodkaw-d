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
    const mdlgno = new Discord.MessageEmbed()
      .setColor(`BLACK`)
      .setDescription(
        `<a:hayir:815534736725901322> **Bu sunucuda daha önceden modlog kanalı ayarlanmamış. Ayarlamak için:** \`${prefix}mod-log <#kanal>\``
      );
    return message.channel.send(mdlgno);
  } else {
    if (modlogs) {
      db.delete(`modlogkanaly_${message.guild.id}`);
      const mdlgsfrx = new Discord.MessageEmbed()
        .setColor(`BLACK`)
        .setDescription(
          `<a:evet:815534728493006858> **Modlog kanalı başarılı bir sıfırlandı!**`
        );
      message.channel.send(mdlgsfrx);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["modlog-sıfırla"],
  permLevel: 0
};

exports.help = {
  name: "mod-log-sıfırla",
  description: "Sıfırlar.",
  usage: "mod-log-sıfırla"
};
