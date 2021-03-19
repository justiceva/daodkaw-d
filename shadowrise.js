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
const { Canvas } = require("canvas-constructor");
const YouTube = require("simple-youtube-api");
const superagent = require("superagent");
const ytdl = require("ytdl-core");

var prefix = process.env.prefix;

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

//AFK Baş

const ms = require("parse-ms");
const { DiscordAPIError } = require("discord.js");

client.on("message", async message => {

  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`afk`)) return;

  if (await db.fetch(`afk_${message.author.id}`)) {
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);

    const embed = new Discord.MessageEmbed()

      .setColor("#00ff00")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(`${message.author.username} Artık \`AFK\` Değilsin.`);

    message.channel.send(embed);
  }

  var USER = message.mentions.users.first();
  if (!USER) return;
  var REASON = await db.fetch(`afk_${USER.id}`);

  if (REASON) {
    let süre = await db.fetch(`afk_süre_${USER.id}`);
    let timeObj = ms(Date.now() - süre);

    const afk = new Discord.MessageEmbed()

        .setColor("#00ff00")
      .setDescription(
        `**Bu Kullanıcı AFK**\n\n**Afk Olan Kullanıcı :** \`${USER.tag}\`\n**Afk Süresi :** \`${timeObj.hours}saat\` \`${timeObj.minutes}dakika\` \`${timeObj.seconds}saniye\`\n**Sebep :** \`${REASON}\``
      );

    message.channel.send(afk);
  }
});

//AFK Son

//HG-BB Baş

client.on("guildMemberAdd", async member => {  
            var namam = member.user.username
            var yazı = namam.length > 12 ? namam.substring(0, 10) + "..." : namam;
            async function createCanvas() {
            var imageUrlRegex = /\?size=2048$/g;
      var resimm = JSON.parse(fs.readFileSync("./image.json", "utf8"))
      if (!resimm[member.guild.id]){
        resimm[member.guild.id] = {
resimm: "http://wallperio.com/data/out/121/flat-wallpaper_601075203.jpg"
};
}
           let anan = resimm[member.guild.id].resimm;

      var hoşgeldin = JSON.parse(fs.readFileSync("./warnawelcome.json", "utf8"))
      if (!hoşgeldin[member.guild.id]){
        hoşgeldin[member.guild.id] = {
warna: "hgbb"
};
}

const karışık = [
        `https://cdn.discordapp.com/attachments/510927533353598976/608428790137487370/prembegiirs0000.jpg`,
        `https://cdn.discordapp.com/attachments/510927533353598976/608428841022783510/yesilgiris0000.jpg`,
        `https://cdn.discordapp.com/attachments/510927533353598976/604700767269421076/sar.png`,
        `https://cdn.discordapp.com/attachments/510927533353598976/608428786895028224/krmz_giris0001.jpg`,
        `https://cdn.discordapp.com/attachments/510927533353598976/608428830042095617/1.jpg`,
                `https://cdn.discordapp.com/attachments/510927533353598976/608428851265011763/ssiyah_giris0001.jpg`

    ]

let atış = Math.floor((Math.random() * karışık.length));


           let resimler = warnawelcomes[member.guild.id].warna;
      let resim = warnawelcomes[member.guild.id].warna
      resimler = resim.replace('pembe', 'https://cdn.discordapp.com/attachments/510927533353598976/608428790137487370/prembegiirs0000.jpg')
      resimler = resim.replace('yeşil', 'https://cdn.discordapp.com/attachments/510927533353598976/608428841022783510/yesilgiris0000.jpg')
      resimler = resim.replace('sarı', 'https://cdn.discordapp.com/attachments/510927533353598976/608428794432192523/sargiris0001.jpg')
      resimler = resim.replace('kırmızı', 'https://cdn.discordapp.com/attachments/510927533353598976/608428786895028224/krmz_giris0001.jpg')
      resimler = resim.replace('beyaz', 'https://cdn.discordapp.com/attachments/510927533353598976/608428830042095617/1.jpg')
            resimler = resimler.replace('siyah', 'https://cdn.discordapp.com/attachments/510927533353598976/608428851265011763/ssiyah_giris0001.jpg')
      resimler = resimler.replace('karışık', `${karışık[atış]}`)

            var {body: background} = await superagent.get(`${resimler}`);
            var {body: background1} = await superagent.get(`${anan}`);
            var {body: avatar} = await superagent.get(member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128"));

            return new Canvas(360, 250)
              .setColor('white')
              .setTextAlign('center')
              .addImage(background1, 0, 0, 360, 250)
              .addImage(background, 0, 0, 360, 250)
             // .addText("Görüşürüz", 260, 325)
              .addText(`${yazı}`, 165, 350)
  .addCircularImage(avatar, 179, 137, 57)
              .toBufferAsync();
            }
  var hg = JSON.parse(fs.readFileSync("./welcome.json", "utf8"))
 let hoşgeldinAayarlar = JSON.parse(fs.readFileSync("./welcomeonoff.json", "utf8"));
     if (!hoşgeldinAayarlar[member.guild.id]) {
    hoşgeldinAayarlar[member.guild.id] = {
     values: 1
      };
    }

    if(!hg[member.guild.id]) return;  
    let values = hoşgeldinAayarlar[member.guild.id].checker
  
    if (values === undefined) return;
    if (values === 0) return;
    if (values === 1) {
    var hggg = JSON.parse(fs.readFileSync("./welcome.json", "utf8"))
    if (!hggg) return;
    let channel = member.guild.channels.get(`${hggg[member.guild.id].nick}`);
    if (!channel) return;


      var text1 = JSON.parse(fs.readFileSync("./imgtext.json", "utf8"))
      if (!text1[member.guild.id]){
        text1[member.guild.id] = {
kata: `anan `
};
}
           let text2 = text1[member.guild.id].resimm;

  channel.send(`
**${member}** Sunucuya Katıldı.
${text2}
`,{
  files: [{
    attachment: await createCanvas(),
    name: 'HGBB.jpg'
  }] })
  }
});







  client.on("guildMemberRemove", async member => {  
            var namam = member.user.username
            var yazi = namam.length > 12 ? namam.substring(0, 10) + "..." : namam;
            async function createCanvas() {
            var imageUrlRegex = /\?size=2048$/g;
             // let image = JSON.parse(fs.readFileSync("./image.json", "utf8"))
      var backgrounds = JSON.parse(fs.readFileSync("./image.json", "utf8"))
      if (!backgrounds[member.guild.id]){
        backgrounds[member.guild.id] = {
backgrounds: "https://img.traveltriangle.com/attachments/pictures/892481/original/boat-at-rameshwaram-beach-in-bay-of-begal-sea.png"
};
}
           let siye = backgrounds[member.guild.id].backgrounds;

      var warnawelcomes = JSON.parse(fs.readFileSync("./warnawelcome.json", "utf8"))
      if (!warnawelcomes[member.guild.id]){
        warnawelcomes[member.guild.id] = {
warna: "biru"
};
}

const karisik = [
        `https://cdn.discordapp.com/attachments/510927533353598976/608428789080522782/pembecks0001.jpg`,
        `https://cdn.discordapp.com/attachments/510927533353598976/608428847729475595/yesilcks0001.jpg`,
        `https://cdn.discordapp.com/attachments/510927533353598976/608428792125325322/sarcks0001.jpg`,
        `https://cdn.discordapp.com/attachments/510927533353598976/608428785808965656/krmz_cks0001.jpg`,
        `https://cdn.discordapp.com/attachments/510927533353598976/608428860043952146/2.jpg`,
                `https://cdn.discordapp.com/attachments/510927533353598976/608428853374746670/siyahcks0001.jpg`

    ]

let karisik2 = Math.floor((Math.random() * pokeself.length));


           let hop = warnawelcomes[member.guild.id].warna;
      const resim = warnawelcomes[member.guild.id].warna
      hop = resim.replace('pembe', 'https://cdn.discordapp.com/attachments/510927533353598976/608428789080522782/pembecks0001.jpg')
      hop = resim.replace('yeşil', 'https://cdn.discordapp.com/attachments/510927533353598976/608428847729475595/yesilcks0001.jpg')
      hop = resim.replace('sarı', 'https://cdn.discordapp.com/attachments/510927533353598976/608428792125325322/sarcks0001.jpg')
      hop = resim.replace('kırmızı', 'https://cdn.discordapp.com/attachments/510927533353598976/608428785808965656/krmz_cks0001.jpg')
      hop = resim.replace('beyaz', 'https://cdn.discordapp.com/attachments/510927533353598976/608428860043952146/2.jpg')
            ho = hop.replace('siyah', 'https://cdn.discordapp.com/attachments/510927533353598976/608428853374746670/siyahcks0001.jpg')
      hop = hop.replace('karışık', `${karisik[karisik2]}`)

            var {body: background} = await superagent.get(`${hop}`);
            var {body: background1} = await superagent.get(`${siye}`);
            var {body: avatar} = await superagent.get(member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128"));

            return new Canvas(360, 250)
              .setColor('white')
              .setTextAlign('center')
             // .setTextFont('bold 40px System')
              .addImage(background1, 0, 0, 360, 250)
              .addImage(background, 0, 0, 360, 250)
            // .addText("Görüşürüz", 260, 325)
              .addText(`${yazi}`, 165, 350)
  .addCircularImage(avatar, 180, 143, 57)
              .toBufferAsync();
            }
  var welcome = JSON.parse(fs.readFileSync("./welcome.json", "utf8"))
 let welcomesetting = JSON.parse(fs.readFileSync("./welcomeonoff.json", "utf8"));
     if (!welcomesetting[member.guild.id]) {
    welcomesetting[member.guild.id] = {
     values: 1
      };
    }

    if(!welcome[member.guild.id]) return;  
    let values = welcomesetting[member.guild.id].checker
  
    if (values === undefined) return;
    if (values === 0) return;
    if (values === 1) {
    var welcome = JSON.parse(fs.readFileSync("./welcome.json", "utf8"))
    if (!welcome) return;
    let channel = member.guild.channels.get(`${welcome[member.guild.id].nick}`);
    if (!channel) return;


      var yazi = JSON.parse(fs.readFileSync("./imgtext.json", "utf8"))
      if (!yazi[member.guild.id]){
        yazi[member.guild.id] = {
baban: `hgbb!gkanal yazı <yazı>`
};
}
           let yazi2 = yazi[member.guild.id].backgrounds;

  channel.send(`
**${member}** Sunucumuzdan Ayrıldı
`,{
  files: [{
    attachment: await createCanvas(),
    name: 'hgbb.jpg'
  }] })
  }
});

client.on("guildMemberRemove", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/giris.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/giris.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("RED")
    .setFooter("", client.user.avatarURL);
 
  
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(` <a:cks:524956995183312897> ${member} Sunucumuzdan Ayrıldı, Çıkışın ile Sunucuda **${member.guild.memberCount}** Kullanıcı Kaldı!`);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }
 
});
client.on("guildMemberAdd", async member => {  
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/giris.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/giris.json", "utf8"));  
 
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`<a:giris:524956676583849984> **${member.guild.name}** Sunucusuna Hoşgeldin ${member} \n**${member.guild.memberCount}** Kişi Olduk!` );
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }
 
});
//HG-BB Son

 

  