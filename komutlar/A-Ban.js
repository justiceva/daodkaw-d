const Discord = require("discord.js");
const fs = require("fs");

exports.run = (client, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor(`BLACK`)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("Uyarı", "`ban` adlı komutu özel mesajlarda kullanamazsın.");
    return message.author.send(ozelmesajuyari);
  }
  let guild = message.guild;
  let reason = args.slice(1).join(" ");
  let shadowrise_ban = message.mentions.users.first();

  if (message.mentions.users.size < 1)
    return message.channel
      .send(
        new Discord.MessageEmbed()
          .setColor(`BLACK`)
          .setDescription(
            `<a:uyari:815530496871366657> Lütfen Sunucudan \`Yasaklayacağınız\` Kişiyi Etiketleyin.`
          )
      )
      .catch(console.error);

  if (!message.guild.member(shadowrise_ban).bannable)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor(`BLACK`)
        .setDescription(
          `<a:hayir:815534736725901322> Belirttiğiniz kişinin Yetkisi Benden Daha Üstün!`
        )
    );
  message.guild.member(shadowrise_ban).ban();

  message.channel.send(
    new Discord.MessageEmbed()
      .setColor("BLACK")
      .setDescription(
        "<a:like:815282443086725151> Başarılı \n <a:black_tik:815280959397691422> " +
          shadowrise_ban +
          " ID'li kullanıcı \n <a:kirmiziyildiz:815283970820145213> " +
          reason +
          " Sebebiyle sunucudan yasaklandı \n"
      )
  );
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ban"],
  permLevel: 3,
  kategori: "moderasyon"
};

exports.help = {
  name: "ban",
  description: "İstediğiniz kişiyi sunucudan yasaklar.",
  usage: "ban <@kullanıcı> <sebep>"
};
