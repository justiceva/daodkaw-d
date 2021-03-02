const { MessageEmbed } = require("discord.js");
module.exports.run = (client, message, args) => {
  if (
    !["ROL ID"].some(role => message.member.roles.cache.get(role)) &&
    !message.member.hasPermission("ADMINISTRATOR")
  )
    return message.channel.send(
      new MessageEmbed()
        .setColor(`BLACK`)
        .setDescription(
          `<a:hayir:815534736725901322> Bu komutu kullanabilmek için \`Yönetici\` iznine sahip olmalısın!`
        )
    );

  const booster = message.guild.roles.cache.get("773446697220046870").members
    .size;
  const online = message.guild.members.cache.filter(
    u => u.presence.status != "offline"
  ).size;
  const toplam = message.guild.memberCount;
  const ses = message.guild.channels.cache
    .filter(channel => channel.type == "voice")
    .map(channel => channel.members.size)
    .reduce((a, b) => a + b);

  const embed = new MessageEmbed()
    .setColor(`BLACK`)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/814946376894513163/815870054843416576/3caed152951498ef3ff31ea94cb55f93.png"
    )
    .setFooter(`© ShadowRise Network | Sunucu Say`)
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }));
  message.channel.send(
    embed.setDescription(`**<a:bit:815283242479124511> Toplam Üye  ・ ${toplam}
    <a:boost:815560954024165407> Booster Üye ・${booster} 
    <a:music:815560660699447316> Sesteki Üye ・${ses}**`)
  );
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["say"],
  permLvl: 0
};

exports.help = {
  name: "say"
};
