const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let botadi = process.env.botadi;
  let devtr = args.slice(0).join(" ");

  if (!devtr)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("Black")
        .setDescription(
          `<@${message.author.id}> | Sahibimi Çağırmak İçin Bir Sebeb Gir`
        )
    );
  if (devtr.length < 7)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `<@${message.author.id}>  | Sebebiniz Daha Bilgilendirici Olması İçin **__En Az 7__** Karakterli Olmalıdır!`
        )
    );
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({ maxAge: 0 }).then(invite => {
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `<a:evet:815534728493006858> | __Sahibime Mesajını İlettim!__`
        )
    );
    let xfalcon = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setAuthor(
        `${message.author.tag} (${message.author.id})`,
        `${message.author.avatarURL()}`
      )
      .setTitle("Biri Seni Yardım İçin Çağırdı")
      .addField("Sebep:", `${devtr}`)
      .addField(`Sunucunun Davet Linki:`, `${invite}`)
      .setThumbnail(message.guild.iconURL())
      .setFooter(`${botadi} | Yapımcıyı Çağırma Sistemi`);
    client.users.cache.get(process.env.sahip).send(xfalcon);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yapımcıyı-çağır"],
  permLevel: 0
};

exports.help = {
  name: "çağır",
  description: "Yapımcıyı Sunucuya Çağırır.",
  usage: "çağır"
};
