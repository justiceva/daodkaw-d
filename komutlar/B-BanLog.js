const Discord = require("discord.js");
const db = require("quick.db");
let prefix = process.env.prefix;
exports.run = async (client, message, args) => {
  let CEChannel = message.mentions.channels.first();
  let CELog = db.fetch("ce-banlog." + message.guild.id) || "Var olmayan";
  if (
    !message.guild.members.cache
      .get(message.author.id)
      .hasPermission("BAN_MEMBERS")
  )
    return message.channel.send(`<@${message.author.id}> Ban Yetkin Olmadan Ban Sistemdeki Hiç Birşeyi Ayarlamassın.`);
  if (!CEChannel) return message.channel.send(`> <a:unlem:822546045706698763> Daha BanLog Ayarlamadın \n > <:kabulet:822545421628342312> Doğru Ayarlamak İçin \`${prefix}ban-log #kanal\``);
  await db.set("ce-banlog." + message.guild.id, CEChannel.id);
  return message.channel.send(
    "Daha önceden " +
      CELog +
      " olarak belirlenen log kanalını <#" +
      CEChannel.id +
      "> kanalı ile değiştirdim!"
  );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ban-log",
  description: "",
  usage: ""
};
