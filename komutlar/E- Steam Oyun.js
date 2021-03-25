const Discord = require("discord.js");
var steam = require("steam-provider");
var provider = new steam.SteamProvider();

let prefix = process.env.prefix;

exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  let userinfo = {};
  userinfo.avatar = user.avatarURL();
  let game = args[0];
  let steampng =
    "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png";
  if (!game)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `<@${message.author.id}> | Lütfen Steamde Olan Bir Oyunun Adını Yazın. Örnek: \`${prefix}steamoyun [Oyun]\``
        )
    );
  provider.search(game).then(result => {
    provider.detail(result[0].id, "turkey", "tr").then(results => {
      console.log(results);
      const embed = new Discord.MessageEmbed()
        .setAuthor("Steam Store", steampng)
        .setColor("BLACK")
        .setTitle(result[0].name)
        .addField(`<a:black_tik:815280959397691422> Oyunun ID 'sı`, result[0].id)
        .setThumbnail(results.otherData.imageUrl)
        .addField("<a:bit:815283242479124511> Türleri", results.genres)
        .addField(
          "<a:kredi:816345145501810698> Fiyati",
          `Normal Fiyat **${results.priceData.initialPrice}** TL
İndirimli Fiyat **${results.priceData.finalPrice}** TL`,
          true
        )
        .addField(
          "<:windows10:816345167782871060> Platformlar",
          results.otherData.platforms,
          true
        )
        .addField("<a:like:815282443086725151> Metacritic Puanı", results.otherData.metacriticScore, true)
        .addField("<a:kirmiziyildiz:815283970820145213> Etiketleri", results.otherData.features, true)
        .addField("<a:music:815560660699447316> Geliştiricileri", results.otherData.developer, true)
        .addField("<a:kilit:816353400941707326> Yayımcıları", results.otherData.publisher)
        .setColor("BLACK")
        .setFooter(
          `${message.author.username} tarafından istendi.`,
          userinfo.avatar
        );
      message.channel.send(embed).catch(e => {
        console.log(e);
        message.reply("Hata Olustu Yada `" + game + "` Adlı Oyun Bulunamadı");
      });
    });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["steam"],
  permLevel: 0
};

exports.help = {
  name: "steamoyun",
  description: "steamstore",
  usage: "steamoyun"
};
