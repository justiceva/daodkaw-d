const Discord = require("discord.js");
const db = require("quick.db");

var prefix = process.env.prefix;

let botadi = process.env.botadi;

module.exports.run = async (client, message, args) => {
  const modlog = await db.fetch(`modlogkanaly_${message.guild.id}`);
  const reklam = await db.fetch(`reklam_${message.guild.id}`);
  const küfür = await db.fetch(`kufur_${message.guild.id}`);
  const rolkoruma = await db.fetch(`rolk_${message.guild.id}`);
  const kanalkoruma = await db.fetch(`kanalk_${message.guild.id}`);
  const botkoruma = await db.fetch(`antiraidK_${message.guild.id}`);

  let sayfalar = [
    `
> <a:kirmiziyildiz:815283970820145213> Sunucu Ayarları  
  
> <a:black_tik:815280959397691422> **__ModLog Sistem__**: ${
      modlog
        ? "<a:evet:815534728493006858> **``| Ayarlandı``**"
        : "<a:hayir:815534736725901322> **``| Ayarlanmadı``**"
    }
> <a:black_tik:815280959397691422> **__Reklam Engel__**: ${
      reklam
        ? "<a:evet:815534728493006858> **``| Ayarlandı``**"
        : "<a:hayir:815534736725901322> **``| Ayarlanmadı``**"
    }
> <a:black_tik:815280959397691422> **__Küfür Engel__**: ${
      küfür
        ? "<a:evet:815534728493006858> **``| Ayarlandı``**"
        : "<a:hayir:815534736725901322> **``| Ayarlanmadı``**"
    }
> <a:black_tik:815280959397691422> **__Rol Koruma__**: ${
      rolkoruma
        ? "<a:evet:815534728493006858> **``| Ayarlandı``**"
        : "<a:hayir:815534736725901322> **``| Ayarlanmadı``**"
    }
  > <a:black_tik:815280959397691422> **__Kanal Koruma__**: ${
    kanalkoruma
      ? "<a:evet:815534728493006858> **``| Ayarlandı``**"
      : "<a:hayir:815534736725901322> **``| Ayarlanmadı``**"
  }
  > <a:black_tik:815280959397691422> **__Bot Koruma__**: ${
    botkoruma
      ? "<a:evet:815534728493006858> **``| Ayarlandı``**"
      : "<a:hayir:815534736725901322> **``| Ayarlanmadı``**"
  }

`
  ];
  let page = 1;

  const embed = new Discord.MessageEmbed()
    .setTitle(`${botadi} | Sunucu Ayarlar Sistemi`)
    .setColor("BLACK")
    .addField(
      `__Bilgilendirme__`,
      `<a:like:815282443086725151>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:like:815282443086725151> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:like:815282443086725151> \`${prefix}siteler\` | ShadowRise Network Sitelerini Görürsün`
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/814946376894513163/815870054843416576/3caed152951498ef3ff31ea94cb55f93.png"
    )
    .setFooter(`${botadi} | Sunucu Ayarlar`)
    .setDescription(sayfalar[page - 1]);

  message.channel.send(embed).then(msg => {
    msg.react("797033410484109323").then(r => {
      msg.react("797033472274464779");

      const backwardsFilter = (reaction, user) =>
        reaction.emoji.name === "sol" && user.id === message.author.id;
      const forwardsFilter = (reaction, user) =>
        reaction.emoji.name === "RainbowOkGif" && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, {
        time: 60000
      });
      const forwards = msg.createReactionCollector(forwardsFilter, {
        time: 60000
      });

      backwards.on("collect", r => {
        if (page === 1) return;
        page--;
        embed.setTitle(`${botadi} | Sunucu Ayarlar Sistemi`);
        embed.setDescription(sayfalar[page - 1]);
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("BLACK");
        embed.addField(
          `__Bilgilendirme__`,
          `<a:like:815282443086725151>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:like:815282443086725151> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:like:815282443086725151> \`${prefix}siteler\` | ShadowRise Network Sitelerini Görürsün`
        );
        embed.setThumbnail(
          "https://cdn.discordapp.com/attachments/814946376894513163/815870054843416576/3caed152951498ef3ff31ea94cb55f93.png"
        );
        msg.edit(embed);
      });

      forwards.on("collect", r => {
        if (page === sayfalar.length) return;
        page++;
        embed.setTitle(`${botadi} | Sunucu Ayarlar Sistemi`);
        embed.setDescription(sayfalar[page - 1]);
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.addField(
          `__Bilgilendirme__`,
          `<a:like:815282443086725151>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:like:815282443086725151> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:like:815282443086725151> \`${prefix}siteler\` | ShadowRise Network Sitelerini Görürsün`
        );
        embed.setColor("BLACK");
        embed.setThumbnail(
          "https://cdn.discordapp.com/attachments/814946376894513163/815870054843416576/3caed152951498ef3ff31ea94cb55f93.png"
        );
        msg.edit(embed);
      });
    });
  });
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-sistemi", "", "", ""],
  permLevel: 0
};

module.exports.help = {
  name: "sunucu",
  description: "Sunucu ayarlarını gösterir.",
  usage: "ayarlar"
};
