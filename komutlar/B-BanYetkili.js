const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let CERol = message.mentions.roles.first();
  let CEYetkili =
    db.fetch("ce-banyetkili." + message.guild.id) || "Var olmayan";
  if (
    !message.guild.members.cache
      .get(message.author.id)
      .hasPermission("BAN_MEMBERS")
  )
    return message.channel.send(" Ban yetkin yok. ^^");
  if (!CERol) return message.channel.send("Yetkili rolünü pingle!");
  await db.set("ce-banyetkili." + message.guild.id, CERol.id);
  return message.channel.send(
    "Daha önceden " +
      CEYetkili +
      " olarak belirlenen rolü <@&" +
      CERol.id +
      "> rolü ile değiştirdim!"
  );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ban-yetkili",
  description: "",
  usage: ""
};
