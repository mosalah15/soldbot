var ServerID = "511915174903414784"; //اي دي السيرفر
var ChannelID = "515532969721593868";// اي دي الروم




const Discord = require('discord.js');
const client = new Discord.Client();

client.on('warn', console.warn);

client.on('error', console.error);



client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

var timer = setTimeout(timerFunc, 1000);
 client.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()

    if(command == "3say") {
        message.channel.send(args.slice(1, args.length).join(" "))
    }
});
client.login(process.env.BOT_TOKEN);
