const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const mod = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("<:YouTube:791401370560495668> Yrnex Abone Sistemi Komutları! ")
    .setTimestamp()
    .setDescription(
      "🎉 **+gstart** = Çekilişi başlatır.  \n 🎉 **+greroll** = Çekilişi kazanan kişiyi değiştirsiniz.  \n 🎉 **+gend** = Seçilen çekilişi bitir.  \n 🎉 **+gedit** = Bi çekilişe edit atarsınız.  \n 🎉 **+ping** = Botun ping'ini gösterir."
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/765269752788025375/765912834592342016/Untitled_design_1.gif"
    );
  message.channel.send(mod);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "yardım",
  category: "kullanıcı",
  description: "Yardım Menüsü.",
  usage: "-yardım"
};
