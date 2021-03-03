const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
let prefix = process.env.prefix;
let botadi = process.env.botadi;

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(
      "Bu komutu kullanmak için gerekli yetkiye sahip değilsin"
    );
  if (!args[0])
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `**__Kullanım şekli__** \n \`${prefix}otorol rol-ayarla [@Rol]\` | \`${prefix}otorol kanal-ayarla [#Kanal]\` \n \`${prefix}otorol rol-sıfırla\` | \`${prefix}otorol kanal-sıfırla\``
        )
        .setTimestamp()
        .setFooter(`${botadi} | OtoRol Komutları`, client.user.avatarURL())
    );
  if (args[0] === "rol-ayarla") {
    var rol =
      message.mentions.roles.first() ||
      message.guild.roles.cache.find(r => r.id == args[1]);
    if (!rol)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(
            `Bir Rol İsmi | ID'si Girmelisin \n **Örnek Kullanım** » \n \`${prefix}otorol rol-ayarla @「♦️」Oyuncu\` `
          )
          .setTimestamp()
          .setFooter(`${botadi} | Rol Ayarlama`, client.user.avatarURL())
      );
    db.set(`${message.guild.id}_otorol`, rol.id);
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `<a:evet:815534728493006858> | Rol Başarılı Bir Şekilde ${rol} Olarak ayarlandı`
        )
    );
  } else if (args[0] == "rol-sıfırla") {
    if (!db.has(`${message.guild.id}_otorol`))
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(
            `<a:kirmiziyildiz:815283970820145213> | Zaten Otorol Ayarlanmamış.`
          )
      );
    else {
      db.delete(`${message.guild.id}_otorol`);
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(
            `<a:evet:815534728493006858> | Otorol Başarılı Bir Şekilde Sıfırlandı`
          )
      );
    }
  } else if (args[0] === "kanal-ayarla") {
    var kanal = message.mentions.channels.first();
    if (!kanal)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(
            `Bir Kanal Etiketlemediniz \n **Örnek Kullanım** » \n \`${prefix}otorol kanal-ayarla #otorol\` `
          )
          .setTimestamp()
          .setFooter(`${botadi} | Kanal Ayarlama`, client.user.avatarURL())
      );
    else {
      db.set(`${message.guild.id}_otokanal`, kanal.id);
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(
        `<a:evet:815534728493006858> | OtoRol Kanal Başarılı Bir Şekilde ${kanal} Olarak Ayarlandı`
            )
      );
    }
  } else if (args[0] === "kanal-sıfırla") {
    if (!db.has(`${message.guild.id}_otokanal`))
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`Zaten Otorol Kanal Ayarlanmamış`)
      );
    else {
      db.delete(`${message.guild.id}_otokanal`);
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(
            `<a:evet:815534728493006858> | Otorol Kanal Başarılı Bir Şekilde Sıfırlandı`
          )
      );
    }
  }
};
exports.conf = {
  aliases: ["oto-rol"]
};
exports.help = {
  name: "otorol"
};
