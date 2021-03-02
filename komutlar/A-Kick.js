const Discord = require("discord.js");
const fs = require("fs");
let prefix = process.env.prefix;

exports.run = (client, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()

      .setAuthor("UYARI")
      .setColor(`BLACK`)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(
        "Lütfen bu komudu özelde kullanmak yerine ekli olduğum sunucuda kullan."
      );

    return message.author.send(ozelmesajuyari);
  }

  let guild = message.guild;
  let reason = args.slice(1).join(" ");
  let shadowrise_kick = message.mentions.users.first();

  if (message.mentions.users.size < 1)
    return message.channel
      .send(
        new Discord.MessageEmbed()
          .setColor(`BLACK`)
          .setDescription(`<a:uyari:815530496871366657> Lütfen Sunucudan \`Atacağınız\` Kişiyi Etiketleyin.`)
      )
      .catch(console.error);

  if (!message.guild.member(shadowrise_kick).bannable)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor(`BLACK`)
        .setDescription(`Belirttiğiniz kişinin Yetkisi Benden Daha Üstün!`)
    );

  message.guild.member(shadowrise_kick).kick();

  message.channel.send(
    new Discord.MessageEmbed()
      .setColor("BLACK")
      .setDescription(
    "<a:like:815282443086725151> Başarılı \n <a:black_tik:815280959397691422> " +
      shadowrise_kick +
      " ID 'li kullanıcı \n <a:kirmiziyildiz:815283970820145213> " +
      reason +
      " Sebebiyle sunucudan atıldı."
    )
  );
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["at"],
  permLevel: 3
};

exports.help = {
  name: "kick",
  description: "İstediğiniz kişiyi sunucudan atar.",
  usage: "kick <@kullanıcı> <sebep>"
};
