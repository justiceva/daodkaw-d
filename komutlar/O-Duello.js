const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const { randomRange, verify } = require("../util/Util.js");

exports.run = async (client, message, args) => {
  this.fighting = new Set();

  let opponent = message.mentions.users.first();
  if (!opponent)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `<a:unlem:816363628282249266> **Yanlış Oynanış** \n <@${message.author.id}> | Oyunu oynamak istediğiniz üyeyi etiketleyiniz.`
        )
    );

  if (opponent.bot)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `<a:unlem:816363628282249266> **Yanlış Oynanış** \n Botlarla bu oyunu oynayamazsınız.`
        )
    );
  if (opponent.id === message.author.id)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `<@${message.author.id}> | Kendin ile düello atamazsın!`
        )
    );
  if (this.fighting.has(message.channel.id))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `<@${message.author.id}> | Kanal başına sadece bir düello meydana gelebilir.`
        )
    );
  this.fighting.add(message.channel.id);
  try {
    if (!opponent.bot) {
      await message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setTitle("Düello İsteği Gönderildi")
          .setDescription(
            `**Düello isteğini kabul ediyor musunuz?** \n _Düello isteğini kabul etmek için_ \`evet\`, reddetmek için \`hayır\` yazınız. \n __Düello Kabul Etmesi Gereken__ ${opponent}`
          )
      );

      const verification = await verify(message.channel, opponent);
      if (!verification) {
        this.fighting.delete(message.channel.id);
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setAuthor(`Shadow Network Düello`, client.user.avatarURL())
            .setDescription(`Görünüşe göre oyun isteği kabul edilmedi..`)
        );
      }
    }
    let userHP = 500;
    let oppoHP = 500;
    let userTurn = false;
    let guard = false;
    const reset = (changeGuard = true) => {
      userTurn = !userTurn;
      if (changeGuard && guard) guard = false;
    };
    const dealDamage = damage => {
      if (userTurn) oppoHP -= damage;
      else userHP -= damage;
    };
    const forfeit = () => {
      if (userTurn) userHP = 0;
      else oppoHP = 0;
    };
    while (userHP > 0 && oppoHP > 0) {
      // eslint-disable-line no-unmodified-loop-condition
      const user = userTurn ? message.author : opponent;
      let choice;
      if (!opponent.bot || (opponent.bot && userTurn)) {
        await message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setTimestamp()
            .setFooter(`ShadowRise Network Farkı`)
            .setAuthor(`Shadow Network Düello`, client.user.avatarURL())
            .setDescription(stripIndents`
						**${user}, ne yapmak istersin?** \n \`saldır\`, \`savun\`, \`ultra güç\`, veya \`kaç\`
            **${message.author.username}**: ${userHP} <a:oyunkalp:816645455542616114> | **${opponent.username}**: ${oppoHP} <a:oyunkalp:816645455542616114>
            `)
        );
        const filter = res =>
          res.author.id === user.id &&
          ["saldır", "savun", "ultra güç", "kaç"].includes(
            res.content.toLowerCase()
          );
        const turn = await message.channel.awaitMessages(filter, {
          max: 1,
          time: 30000
        });
        if (!turn.size) {
          await message.channel.send(
            new Discord.MessageEmbed()
              .setColor("BLACK")
              .setDescription(
                `<@${message.author.id}> | Üzgünüm ama, süre doldu!`
              )
          );
          reset();
          continue;
        }
        choice = turn.first().content.toLowerCase();
      } else {
        const choices = ["saldır", "savun", "ultra güç"];
        choice = choices[Math.floor(Math.random() * choices.length)];
      }
      if (choice === "saldır") {
        const damage = Math.floor(Math.random() * (guard ? 10 : 100)) + 1;
        await message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(`${user}, **${damage}** hasar vurdu!`)
        );
        dealDamage(damage);
        reset();
      } else if (choice === "savun") {
        await message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(`${user}, kendisini süper kalkan ile savundu!`)
        );
        guard = true;
        reset(false);
      } else if (choice === "ultra güç") {
        const miss = Math.floor(Math.random() * 4);
        if (!miss) {
          const damage = randomRange(100, guard ? 150 : 300);
          await message.channel.send(
            new Discord.MessageEmbed()
              .setColor("BLACK")
              .setDescription(
                `${user}, Çoook uzak galaksilerden gelen ultra sonik enerjiyi yeterki miktarda topladın ve **${damage}** hasar vurdun!!`
              )
          );
          dealDamage(damage);
        } else {
          await message.channel.send(
            new Discord.MessageEmbed()
              .setColor("BLACK")
              .setDescription(
                `${user}, Çoook uzak galaksilerden gelen ultra sonik enerjiyi yeterli miktarda toplayamadığın için ulta güç kullanamadın!`
              )
          );
        }
        reset();
      } else if (choice === "kaç") {
        await message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(`${user}, kaçtı! Korkak!`)
        );
        forfeit();
        break;
      } else {
        await message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(
              `<@${message.author.id}>  |Ne yapmak istediğini anlamadım.`
            )
        );
      }
    }
    this.fighting.delete(message.channel.id);
    const winner = userHP > oppoHP ? message.author : opponent;
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `Oyun bitti! Tebrikler, **${winner}** kazandı! \n**${message.author.username}**: ${userHP} <a:oyunkalp:816645455542616114> \n**${opponent.username}**: ${oppoHP} <a:oyunkalp:816645455542616114>`
        )
    );
  } catch (err) {
    this.fighting.delete(message.channel.id);
    throw err;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["1vs1", "1v1", "savaş"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "düello",
  category: "eğlence",
  description: "İstediğiniz bir kişi ile düello atarsınız!",
  usage: "düello <@kullanıcı>"
};
