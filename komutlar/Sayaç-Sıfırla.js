const Discord = require("discord.js");
const fs = require("fs");
let botadi = process.env.botadi;
let prefix = process.env.prefix;
exports.run = async (client, message, args) => {
  let sayac = JSON.parse(fs.readFileSync("./sayac.json", "utf8"));
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(
      `Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!`
    );
  if (!sayac[message.guild.id]) {
    const embed = new Discord.MessageEmbed()
      .setDescription(
        `:warning: Sayaç, ayarlanmadığından dolayı sıfırlanamaz | ${prefix}sayaç <sayı> #kanal`
      )
      .setFooter(`${botadi} | Sayaç Ayar`, client.user.avatarURL())
      .setColor("BLACK")
      .setTimestamp();
    message.channel.send({ embed });
    return;
  }
  delete sayac[message.guild.id];
  fs.writeFile("./sayac.json", JSON.stringify(sayac), err => {
    console.log(err);
  });
  const embed = new Discord.MessageEmbed()
    .setDescription(`:warning: Sayaç, başarılı bir şekilde sıfırlandı!`)
    .setFooter(`${botadi} | Sayaç Sıfırlama Başarılı`, client.user.avatarURL())
    .setColor("BLACK")
    .setTimestamp();
  message.channel.send({ embed });
  return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sayaçsıfırla"],
  permLevel: 0
};

exports.help = {
  name: "sayaçkapat",
  description: "Sayaçı, sıfırlar!",
  usage: "sayaç-sıfırla"
};
