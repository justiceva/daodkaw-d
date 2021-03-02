const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
var prefix = process.env.prefix;
exports.run = async (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send("<a:hayir:815534736725901322> Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmanız gerek.")
  if (args[0] === "aç") {
    if (db.has(`kufur_${message.guild.id}`))
      return message.channel
        .send(
          new MessageEmbed()
            .setDescription(
              `${message.author} Komut zaten önceden \`açılmış\`. \n Kapatmak için: \`${prefix}küfür kapat\``
            )
             .setColor(`BLACK`)
            .setAuthor(
              message.member.displayName,
              message.author.avatarURL({ dynamic: true })
            )
            .setTimestamp()
        )
        .then(x => x.delete({ timeout: 5000 }));
    db.set(`kufur_${message.guild.id}`, "acik");
    message.channel
      .send(
        new MessageEmbed()
          .setDescription(
            `${message.author} Küfür filtersini başarıyla \`açtın\`.`
          )
           .setColor(`BLACK`)
          .setAuthor(
            message.member.displayName,
            message.author.avatarURL({ dynamic: true })
          )
          .setTimestamp()
      )
      .then(x => x.delete({ timeout: 5000 }));
    return;
  }
  if (args[0] === "kapat") {
    if (!db.has(`kufur_${message.guild.id}`))
      return message.channel
        .send(
          new MessageEmbed()
            .setDescription(
              `${message.author} Komut zaten önceden \`kapatılmış\`. \n Açmak için: \`${prefix}küfür aç\``
            )
             .setColor(`BLACK`)
            .setAuthor(
              message.member.displayName,
              message.author.avatarURL({ dynamic: true })
            )
            .setTimestamp()
        )
        .then(x => x.delete({ timeout: 5000 }));
    db.delete(`kufur_${message.guild.id}`);
    message.channel
      .send(
        new MessageEmbed()
          .setDescription(
            `${message.author} Küfür filtersini başarıyla \`kapattın\`.`
          )
          .setColor(`BLACK`)
          .setAuthor(
            message.member.displayName,
            message.author.avatarURL({ dynamic: true })
          )
          .setTimestamp()
      )
      .then(x => x.delete({ timeout: 5000 }));
    return;
  }
  message.channel
    .send(
      new MessageEmbed()
        .setDescription(
          `${message.author} Komutu çalıştırmak için \`aç\` veya \`kapat\` demen gerekiyor.`
        )
         .setColor(`BLACK`)
        .setAuthor(
          message.member.displayName,
          message.author.avatarURL()({ dynamic: true })
        )
        .setTimestamp()
    )
    .then(x => x.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["küfür", "küfür-engel"],
  permLevel: 0
};

exports.help = {
  name: "küfür-ayarla",
  description: "",
  usage: ""
};
