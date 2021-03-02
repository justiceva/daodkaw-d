const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const fs = require("fs");
require("./util/eventLoader.js")(client);
const db = require("quick.db");
const queue = new Map();
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");

//-----------------------------------------------\\
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " PİNGLENDİ ");
  response.sendStatus(200);
});
app.listen(8000);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
//-----------------------------------------------\\

var prefix = process.env.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === process.env.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(process.env.TOKEN);

////-----------------------------\\\\\\\\\

//---------------------------------|Mod-Log Sistemi Başlangıç|---------------------------------\\

const botadi = process.env.botadi;

client.on("messageDelete", message => {
  let modlogs = db.get(`modlogkanaly_${message.guild.id}`);
  const modlogkanal = message.guild.channels.cache.find(
    kanal => kanal.id === modlogs
  );
  if (!modlogs) return;
  if (modlogs) {
    if (message.content.length > 1024) {
      modlogkanal.send({
        embed: {
          Color: "#080000",
          author: {
            name: `${message.author.tag} tarafından gönderilen bir mesaj silindi`,
            icon_url: message.author.displayAvatarURL({ dynamic: true })
          },
          fields: [
            {
              name: `Silinen mesaj 1024 karakterden fazla mesajı gösteremem`,
              value: `\`\`\`Bilinmiyor...\`\`\``
            }
          ],
          timestamp: new Date(),
          footer: {
            icon_url: message.author.displayAvatarURL({ dynamic: true }),
            text: `${botadi} | Mod-Log Sistemi`
          }
        }
      });
    } else {
      modlogkanal.send({
        embed: {
          Color: "#080000",
          author: {
            name: `${message.author.tag} kullanıcısının mesajı silindi\n`,
            icon_url: message.author.displayAvatarURL({ dynamic: true })
          },
          fields: [
            {
              name: `Silinen mesaj:`,
              value: "```" + message.content + "```"
            }
          ],
          timestamp: new Date(),
          footer: {
            icon_url: message.author.displayAvatarURL({ dynamic: true }),
            text: `${botadi} | Mod-Log Sistemi`
          }
        }
      });
    }
  }
});

client.on("guildBanAdd", async (guild, user) => {
  let modlogs = db.get(`modlogkanaly_${guild.id}`);
  const modlogkanal = guild.channels.cache.find(kanal => kanal.id === modlogs);
  if (!modlogs) return;
  if (modlogs) {
    let embed = new Discord.MessageEmbed()
      .setColor(`BLACK`)
      .setAuthor("Bir kişi sunucudan yasaklandı")
      .setThumbnail(
        user.avatarURL({ dynamic: true }) || user.defaultAvatarURL()
      )
      .addField(`Yasaklanan kişi`, `\`\`\` ${user.tag} \`\`\` `)
      .setFooter(`${botadi} | Mod-Log Sistemi`)
      .setTimestamp();
    modlogkanal.send(embed);
  }
});

client.on("guildBanRemove", async (guild, user) => {
  let modlogs = db.get(`modlogkanaly_${guild.id}`);
  const modlogkanal = guild.channels.cache.find(kanal => kanal.id === modlogs);
  if (!modlogs) return;
  if (modlogs) {
    let embed = new Discord.MessageEmbed()
      .setColor(`BLACK`)
      .setAuthor("Bir kişinin yasağı kaldırıldı")
      .setThumbnail(
        user.avatarURL({ dynamic: true }) || user.defaultAvatarURL()
      )
      .addField(`Yasağı kaldırılan kişi`, `\`\`\` ${user.tag} \`\`\` `)
      .setFooter(`${botadi} | Mod-Log Sistemi`)
      .setTimestamp();
    modlogkanal.send(embed);
  }
});

client.on("channelCreate", async channel => {
  let modlogs = db.get(`modlogkanal_${channel.guild.id}`);
  const modlogkanal = channel.guild.channels.cache.find(
    kanal => kanal.id === modlogs
  );
  if (!modlogs) return;
  if (modlogs) {
    if (channel.type === "text") {
      modlogkanal.send({
        embed: {
          Color: "#080000",
          fields: [
            {
              name: `Bir Kanal Oluşturuldu. \nOluşturulan Kanalin İsmi:`,
              value: `\`\`\` ${channel.name} \`\`\``
            },
            {
              name: `Oluşturulan Kanalin Türü`,
              value: `\`\`\` Metin Kanalı \`\`\``
            }
          ],
          timestamp: new Date(),
          footer: {
            text: `${botadi} | Mod-Log Sistemi`
          }
        }
      });
    } else {
      if (channel.type === "voice") {
        modlogkanal.send({
          embed: {
            Color: "#080000",
            fields: [
              {
                name: `Bir Kanal Oluşturuldu. \nOluşturulan Kanalin İsmi:`,
                value: `\`\`\` ${channel.name} \`\`\``
              },
              {
                name: `Oluşturulan Kanalin Türü`,
                value: `\`\`\` Ses Kanalı \`\`\``
              }
            ],
            timestamp: new Date(),
            footer: {
              text: `${botadi} | Mod-Log Sistemi`
            }
          }
        });
      }
    }
  }
});

client.on("channelDelete", async channel => {
  let modlogs = db.get(`modlogkanaly_${channel.guild.id}`);
  const modlogkanal = channel.guild.channels.cache.find(
    kanal => kanal.id === modlogs
  );
  if (!modlogs) return;
  if (modlogs) {
    if (channel.type === "text") {
      modlogkanal.send({
        embed: {
          Color: "#080000",
          fields: [
            {
              name: `Bir Kanal Silindi. \nSilinen Kanalin İsmi:`,
              value: `\`\`\` ${channel.name} \`\`\``
            },
            {
              name: `Silinen Kanalin Türü`,
              value: `\`\`\` Ses Kanalı \`\`\``
            }
          ],
          timestamp: new Date(),
          footer: {
            text: `${botadi} | Mod-Log Sistemi`
          }
        }
      });
    } else {
      if (channel.type === "voice") {
        modlogkanal.send({
          embed: {
            Color: "#080000",
            fields: [
              {
                name: `Bir Kanal Silindi. \nSilinen Kanalin İsmi:`,
                value: `\`\`\` ${channel.name} \`\`\``
              },
              {
                name: `Silinen Kanalin Türü`,
                value: `\`\`\` Ses Kanalı \`\`\``
              }
            ],
            timestamp: new Date(),
            footer: {
              text: `${botadi} | Mod-Log Sistemi`
            }
          }
        });
      }
    }
  }
});

client.on("roleDelete", async role => {
  let modlogs = db.get(`modlogkanaly_${role.guild.id}`);
  const modlogkanal = role.guild.channels.cache.find(
    kanal => kanal.id === modlogs
  );
  if (!modlogs) return;
  if (modlogs) {
    modlogkanal.send({
      embed: {
        Color: "#080000",
        fields: [
          {
            name: `Bir Rol Silindi. \nSilinen Rolun İsmi:`,
            value: `\`\`\` ${role.name} \`\`\``
          }
        ],
        timestamp: new Date(),
        footer: {
          text: `${botadi} | Mod-Log Sistemi`
        }
      }
    });
  }
});

client.on("emojiDelete", async emoji => {
  let modlogs = db.get(`modlogkanaly_${emoji.guild.id}`);
  const modlogkanal = emoji.guild.channels.cache.find(
    kanal => kanal.id === modlogs
  );
  if (!modlogs) return;
  if (modlogs) {
    modlogkanal.send({
      embed: {
        Color: "#080000",
        fields: [
          {
            name: `Bir Emoji Silindi. \nSilinen Emojinin İsmi:`,
            value: `\`\`\` ${emoji.name} \`\`\``
          }
        ],
        timestamp: new Date(),
        footer: {
          text: `${botadi} | Mod-Log Sistemi`
        }
      }
    });
  }
});

client.on("roleCreate", async role => {
  let modlogs = db.get(`modlogkanaly_${role.guild.id}`);
  const modlogkanal = role.guild.channels.cache.find(
    kanal => kanal.id === modlogs
  );
  if (!modlogs) return;
  if (modlogs) {
    modlogkanal.send({
      embed: {
        Color: "#080000",
        fields: [
          {
            name: `Yeni Bir Rol Oluşturuldu. \nOluşturulan Rolun İsmi:`,
            value: `\`\`\` ${role.name} \`\`\``
          }
        ],
        timestamp: new Date(),
        footer: {
          text: `${botadi} | Mod-Log Sistemi`
        }
      }
    });
  }
});

client.on("messageUpdate", async (oldMessage, newMessage) => {
  let modlogs = db.get(`modlogkanaly_${oldMessage.guild.id}`);
  const modlogkanal = oldMessage.guild.channels.cache.find(
    kanal => kanal.id === modlogs
  );
  if (!modlogs) return;
  if (modlogs) {
    if (oldMessage.author.bot) {
      return false;
    }

    if (!oldMessage.guild) {
      return false;
    }

    if (oldMessage.content == newMessage.content) {
      return false;
    }
    modlogkanal.send({
      embed: {
        Color: "#080000",
        author: {
          name: `${oldMessage.author.tag} mesajını düzenledi:\n`,
          icon_url: oldMessage.author.displayAvatarURL({ dynamic: true })
        },
        fields: [
          {
            name: `Eski mesaj:`,
            value: `\`\`\` ${oldMessage.content} \`\`\``
          },
          {
            name: `Yeni Mesaj:`,
            value: `\`\`\` ${newMessage.content} \`\`\``
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: oldMessage.author.displayAvatarURL({ dynamic: true }),
          text: `${botadi} | Mod-Log Sistemi`
        }
      }
    });
  }
});

client.on("emojiCreate", async emoji => {
  let modlogs = db.get(`modlogkanaly_${emoji.guild.id}`);
  const modlogkanal = emoji.guild.channels.cache.find(
    kanal => kanal.id === modlogs
  );
  if (!modlogs) return;
  if (modlogs) {
    modlogkanal.send({
      embed: {
        Color: "#080000",
        fields: [
          {
            name: `Bir emoji eklendi. \nEklenen Emojinin İsmi:`,
            value: `\`\`\` ${emoji.name} \`\`\``
          }
        ],
        timestamp: new Date(),
        footer: {
          text: `${botadi} | Mod-Log Sistemi`
        }
      }
    });
  }
});
//---------------------------------|Mod-Log Sistemi Son|---------------------------------\\

//--------------------------------------------------------------------------------------\\Küfür Engel Baş

client.on("message", async msg => {
  const i = await db.fetch(`kufur_${msg.guild.id}`);
  if (i == "acik") {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "am",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "ak",
      "amq"
    ];
    if (kufur.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();

          return msg.channel
            .send(
              new Discord.MessageEmbed()
                .setDescription(
                  `${msg.author} Bu sunucuda küfür filtresi etkin.`
                )
                .setColor(`BLACK`)
                .setAuthor(
                  msg.member.displayName,
                  msg.author.avatarURL({ dynamic: true })
                )
                .setTimestamp()
            )
            .then(x => x.delete({ timeout: 5000 }));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  const i = db.fetch(`${oldMessage.guild.id}.kufur`);
  if (i) {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "am",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "ak",
      "amq",
      "amguard",
      "seksüel",
      "sekssüel"
    ];
    if (kufur.some(word => newMessage.content.includes(word))) {
      try {
        if (!oldMessage.member.hasPermission("BAN_MEMBERS")) {
          oldMessage.delete();

          return oldMessage.channel
            .send(
              new Discord.MessageEmbed()
                .setDescription(
                  `${oldMessage.author} Bu sunucuda küfür filtresi etkin.`
                )
                .setColor(`BLACK`)
                .setAuthor(
                  oldMessage.member.displayName,
                  oldMessage.author.avatarURL({ dynamic: true })
                )
                .setTimestamp()
            )
            .then(x => x.delete({ timeout: 5000 }));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

//--------------------------------------------------------------------------------------\\Küfür Engel Son

//--------------------------------------------------------------------------------------\\Reklam Engel Baş

client.on("message", msg => {
  if (!db.has(`reklam_${msg.guild.id}`)) return;
  const reklam = [
    ".com",
    ".net",
    ".xyz",
    ".tk",
    ".pw",
    ".io",
    ".me",
    ".gg",
    "www.",
    "https",
    "http",
    ".gl",
    ".org",
    ".com.tr",
    ".biz",
    "net",
    ".rf.gd",
    ".az",
    ".party",
    "discord.gg"
  ];
  if (reklam.some(word => msg.content.includes(word))) {
    try {
      if (!msg.member.hasPermission("BAN_MEMBERS")) {
        msg.delete();
        return msg.channel
          .send(
            new Discord.MessageEmbed()
              .setDescription(
                `${msg.author} Bu sunucuda reklam filtresi etkin.`
              )
              .setColor(`BLACK`)
              .setAuthor(
                msg.member.displayName,
                msg.author.avatarURL({ dynamic: true })
              )
              .setTimestamp()
          )
          .then(x => x.delete({ timeout: 5000 }));

        msg.delete(3000);
      }
    } catch (err) {
      console.log(err);
    }
  }
});

//--------------------------------------------------------------------------------------\\Reklam Engel Son

//---------------------------------|Rol Koruma Sistemi Başlangıç|---------------------------------\\
client.on("roleDelete", async (role, channel, message, guild) => {
  let rolkoruma = await db.fetch(`rolk_${role.guild.id}`);
  if (rolkoruma == "acik") {
    role.guild.createRole({
      name: role.name,
      color: role.color,
      permissions: role.permissions
    });
    role.guild.owner.send(
      new Discord.MessageEmbed().setDescription(
        `<a:evet:815534728493006858> **${role.name}** Adlı Rol Silindi Ve Ben Rolü Tekrar Oluşturdum`
      )
    );
  }
});
//---------------------------------|Rol Koruma Sistemi Son|---------------------------------\\

//---------------------------------|Kanal Koruma Sistemi Başlangıç|---------------------------------\\
client.on("channelDelete", async function(channel) {
  let rol = await db.fetch(`kanalk_${channel.guild.id}`);

  if (rol) {
    const guild = channel.guild.cache;
    let channelp = channel.parentID;

    channel.clone().then(z => {
      let kanal = z.guild.channels.cache.find(c => c.name === z.name);
      kanal.setParent(
        kanal.guild.channels.find(channel => channel.id === channelp)
      );
    });
  }
});
//---------------------------------|Kanal Koruma Sistemi Son|---------------------------------\\

//---------------------------------|Bot Koruma Sistemi Başlangıç|---------------------------------\\
client.on("guildMemberAdd", async member => {
  let kanal =
    (await db.fetch(`antiraidK_${member.guild.id}`)) == "bot-koruma aç";
  if (!kanal) return;
  var cod = member.guild.owner;
  if (member.user.bot === true) {
    if (db.fetch(`botizin_${member.guild.id}.${member.id}`) == "aktif") {
      let are = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setThumbnail(member.user.avatarURL({ dynamic: true }))
        .setDescription(
          `<a:evet:815534728493006858> **${member.user.tag}** (${member.id}) adlı bota bir yetkili verdi eğer kaldırmak istiyorsanız **${prefix}bot-izni kaldır botun_id**.`
        );
      cod.send(are);
    } else {
      let izinverilmemişbot = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setThumbnail(member.user.avatarURL({ dynamic: true }))
        .setDescription(
          "<a:evet:815534728493006858> **" +
            member.user.tag +
            "**" +
            " (" +
            member.id +
            ") " +
            "adlı bot sunucuya eklendi ve banladım eğer izin vermek istiyorsanız **" +
            prefix +
            "bot-izni ver botun_id**"
        );
      member.ban();
      cod.send(izinverilmemişbot);
    }
  }
});
//---------------------------------|Bot Koruma Sistemi Son|--------------------------------

//Seviye Baş
const xpfile = require("./xp.json");
client.on("message",function(message) {
  let kanal = db.fetch(`seviyekanal_${message.guild.id}`)
  let mesaj = db.fetch(`seviyemsj_${message.guild.id}`)
  if(message.author.bot) return;
  var addXP = Math.floor(Math.random() * 8) + 3
  
  if(!xpfile[message.author.id])
      xpfile[message.author.id] = {
        xp: 0,
        level: 1,
        reqxp: 100
      }
  
       fs.writeFile("./xp.json",JSON.stringify(xpfile), function(err){
         if(err) console.log(err)
       })
   
      xpfile[message.author.id].xp += addXP
    if(xpfile[message.author.id].xp > xpfile[message.author.id].reqxp) {
      xpfile[message.author.id].xp -= xpfile[message.author.id].reqxp
      xpfile[message.author.id].reqxp *= 1.25
      xpfile[message.author.id].reqxp = Math.floor(xpfile[message.author.id].reqxp)
      xpfile[message.author.id].level += 1
     if(!mesaj) {
      message.reply("Hey Level Atladın** "+xpfile[message.author.id].level+" **!")
     } 
       if (mesaj) {
    const msg = mesaj.replace("-member-", `<@${message.author.id}>`).replace("-server-", `${message.guild.name}`).replace("-seviye-", `${xpfile[message.author.id].level}`).replace("-seviyexp-", `${xpfile[message.author.id].xp}`).replace("-totalxp-", `${xpfile[message.author.id].reqxp}`)
    return client.channels.cache.get(kanal).send(msg);
  
       fs.writeFile("./xp.json",JSON.stringify(xpfile), function(err){
         if(err) console.log(err)
       })
        
         }
    }
    
  
   })


//Seviye Son

//Ses Baş

client.on('ready', ()=>{
client.channels.cache.get('812725743414411274').join()
})

//Ses Son

//Nitrosuz Emoji Kullanma Baş

client.on("message", async message => {
  if (message.author.bot || message.channel.type !== "text") return;
  if (
    message.content.split(" ").filter(x => x.startsWith(":") && x.endsWith(":"))
      .length > 1
  ) {
    let emojiler = [];
    message.content
      .split(" ")
      .filter(x => x.startsWith(":") && x.endsWith(":"))
      .forEach(x => {
        emojiler.push(
          message.guild.emojis.cache.find(s =>
            s.name.includes(x.replace(/:/g, ""))
          )
        );
      });
    let newMessage;
    var d = -1;
    if (emojiler.length >= 1) {
      emojiler.forEach(s => {
        d++;
        if (!newMessage)
          newMessage = message.content.replace(
            message.content
              .split(" ")
              .filter(x => x.startsWith(":") && x.endsWith(":"))[d],
            s
          );
        if (newMessage)
          newMessage = newMessage.replace(
            message.content
              .split(" ")
              .filter(x => x.startsWith(":") && x.endsWith(":"))[d],
            s
          );
      });
    }
    return (
      message.delete() &&
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`@${message.author.tag} » ${newMessage}`)
      )
    );
  }
  let emoji = message.content
    .split(" ")
    .find(x => x.startsWith(":") && x.endsWith(":"))
    .toString()
    .replace(/:/g, "");
  let emojii = message.guild.emojis.cache.find(x => x.name.includes(emoji));
  if (!emojii) return;
  message.content = message.content.replace(
    message.content.split(" ").find(x => x.startsWith(":") && x.endsWith(":")),
    emojii
  );
  return (
    message.delete() &&
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`@${message.author.tag} » ${message.content}`)
    )
  );
});

//Nitro Emoji Kullanma Son