const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
let prefix =  ayarlar.prefix
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
  .setAuthor('Çekiliş Botu', message.author.displayAvatarURL())
      .addField("🎁 Çekiliş 🎁", `
      **${prefix}başlat \`[#kanal]\` \`[Zaman]\` \`[Kazananacak Kişi Sayısı]\` \`[Ödül]\`** = **Çekilişi Başlatın**
      **${prefix}yenile** \`[Mesaj-ID]\` = **Kazanan Kişiyi Yenileyin!**
      **${prefix}sonlandır** \`[Mesaj-ID]\` = **Başlatılan Çekilişi Bu Komut İle Sonlandırın!**`)

      .addField("Örnek:", `
        **${prefix}başlat #çekiliş 10m 1 Nitro**
      	**${prefix}yenile ID**
      	**${prefix}sonlandır ID**`)
      .addField("Diğer Komutlar", `${prefix}ping ${prefix}stats`, true)
      .setTimestamp()
      .setColor("RED")
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
    return message.channel.send(help);
}

exports.conf = {
  aliases: ['help'],
  permLevel: 0,
};
exports.help = {
  name: 'yardım',
   description: 'Yardım Menüsünü Atar.',
  usage: 'yardım'
};