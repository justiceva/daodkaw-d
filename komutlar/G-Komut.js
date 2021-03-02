const Discord = require("discord.js");
let botadi = process.env.botadi;
exports.run = async (client, message, args, level) => {
  const toplamkomut = new Discord.MessageEmbed()

    .setTitle(``)
    .setAuthor(`${botadi} Toplam Komut Sayısı`)
    .setDescription(
      `<a:bit:815283242479124511> ${botadi} | Toplam ` +
        client.commands.size +
        ` Komut Vardır!`
    )
    .setColor("BLACK")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/814946376894513163/815870054843416576/3caed152951498ef3ff31ea94cb55f93.png"
    )
    .setTimestamp()
    .setFooter(`${botadi} | 2021`, client.user.avatarURL());

  return message.channel.send(toplamkomut);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "komutlar",
  description: "Toplam Komut",
  usage: "toplamkomut"
};
