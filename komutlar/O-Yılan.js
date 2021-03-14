const Discord = require("discord.js");
const GameCord = require("gamecord-fork").djs;
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const embed = new GameCord.SnakeGame(message)
    .setTitle("Yılan Oyunu")
    .setColor("BLACK")
    .setTime(60000)
    .run();
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["snake", "yılan", "yılan-oyunu", "play-snake", "yılan-oyna"],
  permLevel: 0
};

exports.help = {
  name: "snake",
  description: "Bot i",
  usage: "istatistik"
};
