const Discord = require("discord.js");
const rps = ["makas", "taş", "kağıt"],
  rpsF = (userAns, botAns) => {
    let choice = userAns,
      botChoice = botAns;
    if (choice === "taş") {
      if (botChoice === "makas") {
        return "won";
      } else if (botChoice === "kağıt") {
        return "Kaybetin";
      }

      return "draw";
    } else if (choice === "kağıt") {
      if (botChoice === "taş") {
        return "lost";
      } else if (botChoice === "makas") {
        return "Kazandın";
      }

      return "draw";
    } else if (choice === "makas") {
      if (botChoice === "taş") {
        return "lost";
      } else if (botChoice === "kağıt") {
        return "Kazandın";
      }

      return "draw";
    }
  };

exports.run = async (client, msg, args) => {
  if (!args[0]) {
    return msg.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `Lütfen seçimini yap taş, kağıt yada makas | ${prefix}tkm <taş,kağıt,makas>`
        )
    );
  }
  let choice = args[0].toLowerCase();
  choice = choice === "t" ? "taş" : choice;
  choice = choice === "k" ? "kağıt" : choice;
  choice = choice === "m" ? "makas" : choice;
  if (!rps.includes(choice)) {
    return msg.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `Lütfen seçimini yap taş, kağıt yada makas | ${prefix}tkm <t,k,m>`
        )
    );
  }
  let rand = Math.floor(Math.random() * 3);
  let botChoice = rps[rand];
  let result = rpsF(choice, botChoice);
  let answer = "";

  if (result === "won") {
    answer =
      "<a:tac:816356436333953134> Başarılı, sen **__Kazandın__** <a:tac:816356436333953134> \nSenin Seçtiği: `" +
      choice +
      "` | Bot's Seçtiği: `" +
      botChoice +
      "`";
  } else if (result === "lost") {
    answer =
      "<a:hayir:815534736725901322> Bidakine **__Kaybetin Dostum__** <a:hayir:815534736725901322> \nSenin Seçtiğin: `" +
      choice +
      "` | Bot's Seçtiği: `" +
      botChoice +
      "`";
  } else if (result === "draw") {
    answer =
      "<a:sonsuz:81635682975088646> It's a **__Berabere__** <a:sonsuz:81635682975088646> \nSenin Seçimin: `" +
      choice +
      "` | Bot's Seçimi: `" +
      botChoice +
      "`";
  }

  msg.channel.send(answer);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "tkm",
  description: "Taş kağıt makas oyununu oynar.",
  usage: "tkm"
};
