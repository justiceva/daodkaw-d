const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (client, message, args) => {
  const db = require("quick.db");

  let prefix = process.env.prefix;
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `<@${message.author.id}> | Bu Komutu Kullanabilmek İçin \`Yönetici\` iznine sahip olmalısın!`
        )
    );

  if (!args[0]) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `<@${message.author.id}> | Lütfen Ayarlamak İstediğiniz Sayıyı Yazınız`
        )
    );
  }

  if (args[0] === "kapat") {
    if (db.has(`sayac_${message.guild.id}`) === true) {
      db.delete(`sayac_${message.guild.id}`);

      if (db.has(`sKanal_${message.guild.id}`) === true) {
        db.delete(`sKanal_${message.guild.id}`);
        message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(
              `<a:evet:815534728493006858>  Sayaç Kanalı | Sayaç Başarıyla Kaldırıldı.`
            )
        );
        return;
      }

      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(
            `<@${message.author.id}> | <a:evet:815534728493006858> Sayaç Başaralı Şekilde Kaldırıldı.`
          )
      );
      return;
    }
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`<@${message.author.id}> | Sayaç Ayarlanmamış.`)
    );
    return;
  }

  if (isNaN(args[0])) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`<@${message.author.id}> | Sadece Sayı!`)
    );
  }

  if (args[0] <= message.guild.memberCount) {
    const embed = new Discord.MessageEmbed();
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `<@${message.author.id}> | Lütfen __Sunucu Sayısından Daha Yüksek Bir Değer__ Girin!`
        )
    );
  }

  db.set(`sayac_${message.guild.id}`, args[0]);

  const embed = new Discord.MessageEmbed().setColor("BLACK").setAuthor(`
<a:evet:815534728493006858> | Sayaç Başarıyla Ayarlandı: \`${args[0]}\`
<:rules:816959237439750155> | Sayaç Kapatmak İsterseniz \`${prefix}sayaç kapat\` yazmanız yeterlidir.
<:rules:816959237439750155> |Sayaç Kanalı İçin \`${prefix}sayaç-kanal-ayarla #kanal\`
`);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sayacayarla", "sayac", "sayaç"],
  permLevel: 0
};

exports.help = {
  name: "sayaç-ayarla",
  description: "Sayacı ayarlar.",
  usage: "saya-çayarla "
};
