const Discord = require("discord.js");

const client = new Discord.Client ();

var prefix = config.prefix;

client.on("ready", () => {
    console.log(`${client.user.username} esta preparado!`);
    client.user.setactivity ("f!help")
 });

 client.login("OTMyODA3MTcxNjgxNDMxNjMy.YeYWYA.Z4GAAcJL_kawER3hJdOkJGUCzXk");


