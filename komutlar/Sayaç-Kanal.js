const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;

  let userinfo = {};
  userinfo.avatar = user.avatarURL();
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `Bu komutu kullanabilmek için \`Yönetici\` iznine sahip olmalısın!`
        )
    );

  const db = require("quick.db");

  if (args[0] === "kapat") {
    if (db.has(`sKanal_${message.guild.id}`) === true) {
      db.delete(`sKanal_${message.guild.id}`);

      if (db.has(`sayac_${message.guild.id}`) === true) {
        db.delete(`sayac_${message.guild.id}`);
        message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(
              `<@${message.author.id}> | <a:evet:815534728493006858> Sayaç kanalı ve sayaç başarıyla kaldırıldı`
            )
        );
        return;
      }

      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(
            `<:rules:816959237439750155> | Sayaç kanalı kaldırıldı.`
          )
      );
      return;
    }
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`<@${message.author.id}> | Sayaç Kanalı Ayarlanmamış.`)
    );
    return;
  }

  let channel =
    message.mentions.channels.first() ||
    message.guild.channels.cache.find(c => c.name === args.slice(0).join(" "));
  let prefix = process.env.prefix;

  if (!channel) {
    return message.channel.send(new Discord.MessageEmbed()
                                .setColor("BLACK")
    .setDescription(
      `<@${message.author.id}> | Lütfen Ayarlamak İstediğiniz Kanalı Etiketleyin`
      )
    );
  }

  db.set(`sKanal_${message.guild.id}`, channel.id);

  const embed = new Discord.MessageEmbed()
    .setDescription(
      `<a:evet:815534728493006858> | __Sayaç Kanalı Başarıyla Ayarlandı__ ${channel} \n Sayaç Kanalını Kapatmak İsterseniz \`${prefix}sayaçkanal kapat\` Yazmanız Yeterlidir.`
    )
    .setColor("BLACK")
    .setFooter(
      `${message.author.username} tarafından istendi.`,
      userinfo.avatar
    );
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sayaç-kanal-belirle", "sayaçkanal"],
  permLevel: 0
};

exports.help = {
  name: "sayaç-kanal-ayarla",
  description: "Sayaç kanalını ayarlar.",
  usage: "sayaç-kanal-ayarla <#kanal>"
};
