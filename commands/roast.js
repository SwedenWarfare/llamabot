const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let roUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!roUser) return message.channel.send("Can't find user!");
    let roReason = args.join(" ").slice(22);
    message.delete().catch(O_o=>{});

    message.channel.send(`${roUser} was roasted with this : ${roReason}`);
    message.channel.send(`Roasted User ${roUser}`);
    message.channel.send(`Roasted By ${message.author}`);

}

module.exports.help = {
  name:"roast"
}
