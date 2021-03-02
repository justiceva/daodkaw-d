const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let prefix =
    (await db.fetch(`prefix_${message.guild.id}`)) || process.env.prefix;

  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
      .setColor(`#ee7600`)
      .setDescription(
        `<a:hayir:815534736725901322> **Hatalı Kullanım Örnek: ${prefix}rol-koruma aç / kapat**`
      );

    message.channel.send(embed);
    return;
  }
  let rol = await db.fetch(`rolk_${message.guild.id}`);
  if (args[0] == "aç") {
    if (rol) {
      const embed = new Discord.MessageEmbed()
        .setColor(`#ee7600`)
        .setDescription(
          "**<a:evet:815534728493006858> Rol koruma sistemi zaten aktif durumda!**"
        );

      message.channel.send(embed);
      return;
    } else {
      db.set(`rolk_${message.guild.id}`, "acik");
      const embed = new Discord.MessageEmbed()
        .setColor(`#ee7600`)
        .setDescription(
          "**<a:evet:815534728493006858> Rol koruma sistemi aktif silinen rolleri tekrar açacağım ve size bildiriceğim**"
        );

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`rolk_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor(`#ee7600`)
      .setDescription(
        "**<a:evet:815534728493006858> Rol koruma sistemi başarıyla kapatıldı**"
      );

    message.channel.send(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rol-k"],
  permLevel: 2,
  kategori: "sunucu"
};

exports.help = {
  name: "rol-koruma",
  description: "Rol koruma sistemini açıp kapatırsınız.",
  usage: "rol-koruma"
};
