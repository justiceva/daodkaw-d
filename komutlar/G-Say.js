const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.guild)
    return message.author.send(
      "Bu Komutu Sadece Sunucularda Kulanabilirsiniz!"
    );

  const say = new Discord.MessageEmbed()
    .setColor(message.guild.me.displayColor)
    .setTitle(message.guild.name)
    .addField(
      "<a:guard:822552681863315516> **__Sunucudaki Toplam Üye Sayısı__**",
      `\`\`\`${message.guild.memberCount}\`\`\``
    )
    .addField(
      `**__Sunucudaki Toplam Kanal Sayısı__**`,
      `  \`\`\`${message.guild.channels.cache.size}\`\`\``
    )
    .addField(
      "🟢 **__Çevrimiçi üye sayısı__**",
      message.guild.members.cache.filter(
        m => m.user.presence.status !== "offline"
      ).size
    )
    .addField(
      "🔘 **__Çevrimdışı üye sayısı__**",
      message.guild.members.cache.filter(
        m => m.user.presence.status == "offline"
      ).size
    )
    .addField(
      "🤖 **__Sunucudaki Bot Sayısı__**","»"
      message.guild.members.cache.filter(m => m.user.bot).size
    )
    .addField(
      `<a:boost:823605267769065542> **__Boost Sayısı__**`,
      `» **${message.guild.premiumSubscriptionCount}**`
    )
    .addField(
      `<a:emoji:823606451922665543> **__Sunucudaki Emoji Sayısı__**`,
      `» ${message.guild.emojis.cache.size}`
    )
    .addField(
      `<a:rol:823605264854548481> **__Sunucudaki Rol Sayısı__**`,
      `» ${message.guild.roles.cache.size}`
    );

  message.channel.send(say);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["say"],
  permLevel: 0
};

exports.help = {
  name: "gelişmiş-say",
  description: "Say"
};
