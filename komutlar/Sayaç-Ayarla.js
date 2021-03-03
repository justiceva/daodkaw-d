//SYNX KOD PAYLAŞIM
const Discord = require('discord.js')
const db = require('quick.db')
const fs = require('fs')
 
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!`);
        if(!args[0]) {
                const embed = new Discord.MessageEmbed()
                        .setDescription(`:x: **Doğru Kullanım** sayaç <sayı> #kanal`)
                        .setColor("#000000")
                        .setTimestamp()
                message.channel.send({embed})
                return
  }
 
        let profil = JSON.parse(fs.readFileSync("./sayac.json", "utf8"));
  var mentionedChannel = message.mentions.channels.first();
  const s1 = new Discord.MessageEmbed()
  .setDescription(':x: **Doğru Kullanım** sayaç <sayı> #kanal')
  .setColor("#000000")
                        .setTimestamp()
  if (!mentionedChannel && args[0] !== "sıfırla") return message.channel.send(s1);
 
 
        if(args[0] === "sıfırla") {
                if(!profil[message.guild.id]) {
                        const embed = new Discord.MessageEmbed()
                                .setDescription(`:x: Sayaç Daha Önce Ayarlanmamış! **Ayarlamak İçin** sayaç <sayı> #kanal`)
                                .setColor("#000000")
                                .setTimestamp()
                        message.channel.send({embed})
                        return
                }
                delete profil[message.guild.id]
                fs.writeFile("./sayac.json", JSON.stringify(profil), (err) => {
                        console.log(err)
                })
                const embed = new Discord.MessageEmbed()
                        .setDescription(`:x: Sayaç Kapatıldı!`)
                        .setColor("#000000")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        if(isNaN(args[0])) {
                const embed = new Discord.MessageEmbed()
                        .setDescription(`:x: Lütfen, geçerli bir sayı belirtiniz! sayaç <sayı> #kanal`)
                        .setColor("#000000")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        if(args[0] <= message.guild.memberCount) {
                const embed = new Discord.MessageEmbed()
                        .setDescription(`Lütfen, [${message.guild.memberCount}] rakamlı sayıdan daha yüksek bir değer belirtiniz! `)
                        .setColor("#000000")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        if(!profil[message.guild.id]){
                profil[message.guild.id] = {
                        sayi: args[0],
      kanal: mentionedChannel.id
                };
        }
       
        profil[message.guild.id].sayi = args[0]
  profil[message.guild.id].kanal = mentionedChannel.id
       
        fs.writeFile("./sayac.json", JSON.stringify(profil), (err) => {
                console.log(err)
        })
 
        const embed = new Discord.MessageEmbed()
                .setDescription(`Sayaç, başarılı bir şekilde \`${args[0]}\` olarak ayarlandı, sayaç kanalı ise ${mentionedChannel} olarak ayarlandı!`)
                .setFooter('Render Bot', client.user.avatarURL())
                .setColor("BLACK")
                .setTimestamp()
        message.channel.send({embed})
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['sayaç-ayarla'],
        permLevel: 2,
        kategori: "moderasyon"
}
 
exports.help = {
        name: 'sayaç',
        description: 'Sayaç, ayarlar!',
        usage: 'sayaç-ayarla [sayı/sıfırla] [kanal]'
}
   