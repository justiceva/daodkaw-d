const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const embedayarlar = new Discord.MessageEmbed()
    .setAuthor(`© ShadowRise Network | Ayarlar`)
    .setTitle(``)
    .setColor(`BLACK`)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/814946376894513163/815870054843416576/3caed152951498ef3ff31ea94cb55f93.png"
    )
    .setDescription(
      `<a:kirmiziyildiz:815283970820145213> ShadowRise Network Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__ModLog Kanal__`,
      `<a:black_tik:815280959397691422> \`${prefix}modlog [#kanal]\` ModLog Kanal Ayalar.`,
      true
    )
    .addField(
      `__ModLog Kanal Sıfırla__`,
      `<a:black_tik:815280959397691422> \`${prefix}modlog-sıfırla\` ModLog Kanal Ayalarını Sıfırlar.`,
      true
    )
    .addField(
      `__Küfür Engel__`,
      `<a:black_tik:815280959397691422> \`${prefix}küfür-engel [aç/kapat]\` Küfür Filtresini Aktif Eder.`,
      true
    )
    .addField(
      `__Reklam Engel__`,
      `<a:black_tik:815280959397691422> \`${prefix}reklam-engel [aç/kapat]\` Reklam Filtresini Aktif Eder.`,
      true
    )
    .addField(
      `__İsim Değiştir__`,
      `<a:black_tik:815280959397691422> \`${prefix}isimdeğiştir\` Kullanıcının İsim Değiştirirsin.`,
      true
    )
    .addField(
      `__Temizle__`,
      `<a:black_tik:815280959397691422> \`${prefix}temizle [1-100]\` Sayı Kadar Mesaj Siler.`,
      true
    )
    .addField(
      `__Say__`,
      `<a:black_tik:815280959397691422> \`${prefix}say\` Sunucudaki Toplam , Boost ve Sesteki Üye Sayısını Gösterir.`,
      true
    )
    .addField(
      `__Kick__`,
      `<a:black_tik:815280959397691422> \`${prefix}kick [@Kullanıcı]\` Sunucudan Atacagın Kişiyi Atar.`,
      true
    )
    .addField(
      `__Ban__`,
      `<a:black_tik:815280959397691422> \`${prefix}ban [@Kullanıcı]\` Sunucudan Banlayacan Kişiyi Atar.`,
      true
    )
    .addField(
      `__Yavaş Mod__`,
      `<a:black_tik:815280959397691422> \`${prefix}yavaşmod [0/10]\` Yavaş Mod Ayalar.`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:like:815282443086725151>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:like:815282443086725151> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:like:815282443086725151> \`${prefix}siteler\` | ShadowRise Network Sitelerini Görürsün`
    );
  return message.channel.send(embedayarlar);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ayarlar",
  description: "Ayarlar Menüsü",
  usage: "ayarlar"
};
