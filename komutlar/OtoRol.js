const Discord = require("discord.js");
const db = require("quick.db");
let prefix = process.env.prefix;
exports.run = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setAuthor("ShadowRise Network | OtoRol", client.user.avatarURL())
       .setColor("#00ff00")
    .addField(
      "__OTOROL Ayarlamak__",
      "__**Oto-Rol-Ayarla**__ <:sag:822547800481988628> **Otorolü Ayarlar.**\n Örnek: `sn!oto-rol-ayarla @rolünüz #logkanalı` \n \n __**sn!otorol-msg**__》 **Otorol Mesajını Ayarlar.** \n Örnek: `sn!otorol-msg -server-, Sunucumuza Hoşgeldin, -uye-! -rol- Adlı Rolün Başarı İle Verildi Seninle Beraber, **-uyesayisi-** Kişiyiz`"
    )

    .addField(
      "__**Kullanabileceğiniz Değişkenler**__",
      `
**-uye-** <:sag:822547800481988628> \`Üyeyi Etiketler.\`
**-rol-** <:sag:822547800481988628> \`Rolün İsmini Ekler.\`
**-server-** <:sag:822547800481988628> \`Server İsmini Yazar.\`
**-uyesayisi-** <:sag:822547800481988628> \`Üye Sayısını Atar.\`
**-botsayisi-** <:sag:822547800481988628> \`Bot Sayısını Atar.\`
**-kanalsayisi-** <:sag:822547800481988628> \`Kanal Sayısını Atar.\`
**-bolge-** <:sag:822547800481988628> \`Sunucu Bölgesinin İsmini Atar.\`
**-kalanuye-** <:sag:822547800481988628> \`Hedefe Kaç Kişi Kalmış Gösterir.\`
**-hedefuye-** <:sag:822547800481988628> \`Hedef Rakamı Gösterir.\`
`
    )
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "otorol",
  description: "sayaç",
  usage: "sayaç"
};
