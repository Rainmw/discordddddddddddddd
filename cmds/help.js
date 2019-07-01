exports.run = async (client, message, args) => {
    var util = require("../fivem");
    message.delete();
	if (!message.member.hasPermission("ADMINISTRATOR")) return util.embed(`<@${message.author.id}>, Bunu Yapmaya Yetkin Yok.`);
    let embed = new Discord.RichEmbed()
    .setAuthor(state, icon)
    .setColor(color)
    .setDescription(`**FiveM Bot Help**`)
    .addField(`Featured Servers`, "EastSide Roleplay - https://discord.gg/UM4WGre\nCalifornia Department Of Justice - https://discord.gg/zhWETPs")
    .addBlankField(true)
    .addField(`${config.prefix}set <serverIP:port>`, "Sets the current guild FiveM server")
    .addField(`${config.prefix}players`, "Gets the current player list of a server")
    .addField(`${config.prefix}server`, "Gets all information of a server")
    .addField(`${config.prefix}find <username>`, "Finds a user that is on the server via Username")
    .addField(`${config.prefix}id <id>`, "Finds a user that is on the server via Server ID")
    .addField(`${config.prefix}status`, "Checks if the server is online")
    .addField(`${config.prefix}stats`, "Checks bot statistics")
    .addField(`${config.prefix}save-log <person's server id>`, "Saves a player's information")
    .addField(`${config.prefix}get-log`, "Gets a player's information (per guild)")
    .addField(`${config.prefix}forum <topic>`, "Searches the latest topics in the categories on https://forum.fivem.net")
    .addField(`${config.prefix}forum `, "Checks the current categories on https://forum.fivem.net")
    .addField(`${config.prefix}forum search <search terms>`, "Searches terms on https://forum.fivem.net")
    .addField(`${config.prefix}forum user <username>`, "Searches user's info on https://forum.fivem.net")
    .addField(`${config.prefix}native <search terms>`, "returns a specific GTAV native that you searched for")
    .addField(`${config.prefix}rcon help`, "Sends RCON help embed")
    .addField(`${config.prefix}rcon set <rcon_password>`, "Sets the guild's rcon server")
    .addField(`${config.prefix}rcon <rcon_command>`, "Executes an [RCON Command](https://docs.fivem.net/server-manual/server-commands/)")
    .addBlankField(true)
    .setThumbnail(icon)
    .setTitle("Support Discord")
    .setURL("https://discord.gg/yWddFpQ")
    .addBlankField(true)
    .addField("Donate to FiveM Bot's Hosting", "[Donate](https://paypal.me/zivinity)")
    .addBlankField(true)
    .addField("News", news)
    .setFooter("Copyright © Zua - https://github.com/thatziv/", icon)
    log(`Fivem help cmd was used.. in ${message.guild.name}`)
  
    message.channel.send({embed: embed})
};
