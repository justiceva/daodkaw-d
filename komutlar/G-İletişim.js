const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;
  let botadi = process.env.botadi;
  
    let user = message.mentions.users.first() || message.author;

  let userinfo = {};
  userinfo.avatar = user.avatarURL();

  const fynxcode = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setAuthor(`${botadi} İletişim`)
    .setDescription(
      `<:discord:816283003139260457> **__Discord__** \n ➦ Discord üzerinden iletişime geçmek için [buraya](https://discord.gg/BfJqqn4tcZ) tıklayınız. \n <:instagram:816285220436181066> **__Instagram__** \n ➦ Instagram üzerinden iletişime geçmek için [buraya](https://www.instagram.com/shadowrisenetwork/) tıklayınız. \n :e_mail: **__E-Mail__** \n ➦ Mail üzerinden iletişime geçmek için : \n [shadowrisenetwork@gmail.com](https://shadowrisenetwork@gmail.com)`
    )
    .setFooter(
      `${message.author.username} tarafından istendi.`,
      userinfo.avatar
    )

    .setThumbnail(
      "https://cdn.discordapp.com/attachments/814946376894513163/815870054843416576/3caed152951498ef3ff31ea94cb55f93.png"
    );

  return message.channel.send(fynxcode);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: "iletişim",
  description: "Davet Menüsü",
  usage: ""
};
