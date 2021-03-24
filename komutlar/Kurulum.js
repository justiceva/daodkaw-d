const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

    if (db.has(`supanel_${message.guild.id}`)) return message.channel.send("Stats Sistemi Zaten Açık.")
 
  const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0;
  
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.cache.size;
  
    let kategori = await message.guild.channels.create("Sunucu İstatistik", "category", [{
      id: message.guild.id,
      deny: ["CONNECT"]
    }])
    message.guild.channels.create(`Toplam Üye • ${message.guild.memberCount}`, "voice").then(üye => {
    message.channel.send("Oda **1** aktif.")
    message.guild.channels.create(`Çevrimiçi Üye • ${message.guild.members.cache.filter(m => m.presence.status !== "offline").size}`, 'voice').then(aktif => {
    message.channel.send("Oda **2** aktif.")
    message.guild.channels.create(`Botlar • ${message.guild.members.cache.filter(m => m.user.bot).size}`, 'voice').then(neblm => {
    message.channel.send("Oda **3** aktif.")
    message.guild.channels.create(`Rekor Online • ${message.guild.members.cache.filter(m => m.presence.status !== "offline").size}`, 'voice').then(kul => {
    message.channel.send("Oda **4** aktif.")
    message.guild.channels.create(`Sesli • (${count})`, 'voice').then(kul22 => {
    message.channel.send("Oda **5** aktif.")

    üye.createOverwrite(message.guild.id, {
    'CONNECT': false
    })
      
    aktif.createOverwrite(message.guild.id,{
    'CONNECT': false
    })
      
    kul.createOverwrite(message.guild.id,{
    'CONNECT': false
    })
      
      kul22.createOverwrite(message.guild.id,{
    'CONNECT': false
    })
      
      
    neblm.createOverwrite(message.guild.id,{
    'CONNECT': false
    })

      üye.setParent(kategori.id)  
    kul.setParent(kategori.id)  
    neblm.setParent(kategori.id)
         kul22.setParent(kategori.id)
 
          aktif.setParent(kategori.id)

    db.set(`mg_${message.guild.id}`, message.guild.id)
    db.set(`sesliK_${message.guild.id}`, kul22.id)
    db.set(`üyekanal_${message.guild.id}`, üye.id)
    db.set(`rekoronlineK_${message.guild.id}`, kul.id)
    db.set(`rekoronlineS_${message.guild.id}`, message.guild.members.cache.filter(m => m.presence.status !== "offline").size)
    db.set(`kulkanal_${message.guild.id}`, aktif.id)
    db.set(`neblmkanal_${message.guild.id}`, neblm.id)
    db.set(`supanel_${message.guild.id}`, "aktif")  
    db.set(`suKategori_${message.guild.id}`, kategori.id)

    message.channel.send("Stats Sistemi Kuruldu.")
  })
  })
      })
        })
  })
  
  
  
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 3
};

exports.help = {
  name: 'kurulum', 
  description: 'nblm', 
  usage: 'stat' 
};