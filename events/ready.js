const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');

module.exports = client => {

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("dnd");
   var oyun = [

        "ShadowRise Network Gelişmiş Discord Bot",
        "Herşeyi Ayarlamalı",
        "Minecraft Sunucusu Yakında Açılıyor",
         "Öneri Yapmak İçin sn!öneri komutuyla Öneri Yapabilirsiniz",
     
     

       
 
   ];
  setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "idle"); 
        }, 2 * 3000);
}