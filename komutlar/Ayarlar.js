const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const embedayarlar = new Discord.MessageEmbed()
    .setAuthor(`ShadowRise Network | Ayarlar`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/823592301796392960/824619745192968263/a3935a550c559f47bb1e870681a4384f-removebg-preview.png"
    )
    .setDescription(
      `<a:tik:822531200353959937> ShadowRise Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__ModLog__`,
      `<a:green:822530401301954632> \`${prefix}modlog\` Komutla Discord Sunucuza ModLog Kanalını Ayarlarsınız.`,
      true
    )
    .addField(
      `__KüfürEngel__`,
      `<a:green:822530401301954632> \`${prefix}küfürengel\` Discord Sunucuna Küfür Etmeye Çalışanları Durdurursun.`,
      true
    )
    .addField(
      `__Küfür Log__`,
      `<a:green:822530401301954632> \`${prefix}küfürlog\` Discord Sunucuna Küfür Edenlerin Mesaji Silinir Ve Log Kanalına Gider.`,
      true
    )
    .addField(
      `__Reklam Engel__`,
      `<a:green:822530401301954632> \`${prefix}reklamengel\` Discord Sunucuna Reklam Yapmaya Çalışanları Durdurursun.`,
      true
    )
    .addField(
      `__Reklam Log__`,
      `<a:green:822530401301954632> \`${prefix}reklamlog\` Discord Sunucuna Reklam Yapmayı Mesaji Silinir Ve Log Kanalına Gider.`,
      true
    )
    .addField(
      `__BanSay__`,
      `<a:green:822530401301954632> \`${prefix}bansay\` Discord Sunucunuzda Toplam Kaç Banlanmış Kişi Var Onu Gösterir.`,
      true
    )
    .addField(
      `__Sohbet AÇ__`,
      `<a:green:822530401301954632> \`${prefix}sohbet-aç\` Komutu Kullandıgınız Kanalda Sohbeti Açar.`,
      true
    )
    .addField(
      `__Sohbet Kapat__`,
      `<a:green:822530401301954632> \`${prefix}sohbet-kapat\` Komutu Kullandıgınız Kanalda Sohbeti Kapat.`,
      true
    )
    .addField(
      `__İsim Değiştir__`,
      `<a:green:822530401301954632> \`${prefix}isimdeğiştir\` Discord Sunucunuzda Etiketlediginiz Kişinin İsmini Değiştir.`,
      true
    )
    .addField(
      `__Sil__`,
      `<a:green:822530401301954632> \`${prefix}sil\` Yazdıgınız Sayı Kadar Discord Botta O Kadar Mesaj Siler.`,
      true
    )
    .addField(
      `__Mute__`,
      `<a:green:822530401301954632> \`${prefix}mute\` Discord Sunucunuzda Birisini Susturursunz.`,
      true
    )
    .addField(
      `__Güvenlik__`,
      `<a:green:822530401301954632> \`${prefix}güvenlik\` Güvenlik Kanalını Ayarlarsın.`,
      true
    )
    .addField(
      `__Güvenlik Sıfırla__`,
      `<a:green:822530401301954632> \`${prefix}güvenlik-sıfırla\` Güvenlik Kanalını Sıfırlarsın.`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:yesil:822529538663514173>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:yesil:822529538663514173> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:yesil:822529538663514173> \`${prefix}iletişim\` | ShadowRise İletişim Bilgileri.`
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
