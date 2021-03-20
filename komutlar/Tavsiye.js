const Discord = require("discord.js"); ///modulumuzu tanittik
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
exports.run = (client, message, args) => {
  let veri = db.get(`CodEmingOneri.${message.author.id}`)
  let kanal = client.channels.cache.get(db.fetch(`ökanal_${message.guild.id}`));
  let p = db.fetch(`prefix_${message.guild.id}`) || process.env.prefix;

  let öneri = args.slice(0).join(" ");
  if (!kanal)
    return message.channel.send(
      "<:hayir:700453199890350122> Önerilog kanalı ayarlanmamış. Lütfen ayarlamak için `" +
        p +
        "önerilog #kanal` komutunu kullanın."
    );
  if (!öneri)
    return message.reply("<:hayir:700453199890350122> Önerini yaz lütfen. ");
  if (öneri.length > 300)
    return message.reply(
      "<:hayir:700453199890350122> Önerin `300` karakterden fazla olamaz."
    );
  if (öneri.length < 10)
    return message.reply(
      "<:hayir:700453199890350122> Önerin `10` karakterden az olamaz."
    );
  let user = message.mentions.users.first();
  if (user)
    return message.reply(
      "<:hayir:700453199890350122> Öneri komudunda kimseyi etiketleyemezsin"
    );

  message.channel.send(
    "<:evet:700453177987825724> Önerin log kanalına iletildi. "
  );
  let codeming = new Discord.MessageEmbed()
   .setColor('RANDOM')
.setTitle(`Kullanıcı: ${message.author.tag} [${message.author.id}]`)
.setAuthor('Bir Öneri Belirdi', message.author.displayAvatarURL({ dynamic: true }), 'https://discord.gg/NvjVQCb')
.setDescription(`
Konu baslığı
\`\`\`cs
${veri.sistembaslık}
\`\`\`
Sıra
\`\`\`cs
${db.get('CodEmingÖneriSıra')}
\`\`\`
Öneri
\`\`\`cs
${veri.sistemicerik}
\`\`\`
`)
  kanal.send(codeming);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 0
};
exports.help = {
  name: "öneri",
  despricton: "Öneri verirsiniz.",
  usage: "öneri"
};
