exports.run = async (client, message, args) => {
  var util = require("../fivem");

	if (!message.channel.id === '594814943224659978') return util.embed(`<@${message.author.id}>, Burası Kayıt Odası Değil.`);
    if (servers[message.guild.id].guild === message.guild.id) { 
        try {
        var arg = `${servers[message.guild.id].ip}`    
        let api2 = `http://${arg}/info.json`
        req(api2, function (error, response, main) {
         
          if (error) {
            return util.bad("5 Dk Sonra Tekrar Emir Verirmisin Şuan Bakımdayım :(");
          } else {
            util.aktif(`<@&594797829881593866> | <@&594798380920733702> | <@&594802320567697432> | <@&594802314188029952> | <@&594802259163086859> \n\n *Yetkililer En Kısa Sürede Sizinle İlgilenecektir* **Lütfen Bekleyiniz** `)
          }
          log(`Used Command [Status] in ${message.guild.name}`)
    });

      } catch (err) {
        return util.embed("That server does not exist. \n**Console:**\n```js\n"+err+"```");
      }
    } else {
        return util.embed("Please **set** a Direct-Address for this server. ex: `"+config.prefix+"set thatziv.ddns.net:30120`\n***__Please make sure to include the address with port.__***")
      } 
};