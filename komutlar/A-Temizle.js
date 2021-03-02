const { MessageEmbed } = require("discord.js");
exports.run = async (client, message, args, ayar, emoji) => {
  let embed = new MessageEmbed()
    .setAuthor(
      message.member.displayName,
      message.author.avatarURL({ dynamic: true })
    )
    .setColor(`BLACK`)
    .setTimestamp();
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel
      .send(
        embed.setDescription(
          "<a:hayir:815534736725901322> Bu komutu kullanabilmek için \`Mesajları Yönet\` iznine sahip olmalısın!"
        )
      )
      .then(x => x.delete({ timeout: 5000 }));
  if (
    !args[0] ||
    (args[0] && isNaN(args[0])) ||
    Number(args[0]) < 1 ||
    Number(args[0]) > 100
  )
    return message.channel
      .send(
        embed.setDescription(
          "<a:hayir:815534736725901322> 1-100 arasında silinecek mesaj miktarı belirtmelisin!"
        )
      )
      .then(x => x.delete({ timeout: 5000 }));
  await message.delete().catch();
  message.channel
    .bulkDelete(Number(args[0]))
    .then(msjlar =>
      message.channel
        .send(
          embed.setDescription(
            `<a:evet:815534728493006858> Başarıyla **${msjlar.size}** adet mesaj silindi!`
          )
        )
        .then(x => x.delete({ timeout: 5000 }))
    )
    .catch();
};
exports.conf = {
  aliases: ["sil", "clear"],
  usage: "temizle 1-100",
  description: "Belirtilen mesaj sayısı kadar mesaj temizler."
};

exports.help = {
  name: "temizle"
};
