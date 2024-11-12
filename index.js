const { Client, Events, GatewayIntentBits } = require('discord.js');

//setup dotenv
const dotenv = require('dotenv')
const result = dotenv.config()

if (result.error) {
  throw result.error
}

//maybe this makes it so i stop running out of fucking tcp ports -_-
const Agent = require('agentkeepalive')
const HttpsAgent = require('agentkeepalive').HttpsAgent
require('node:http').globalAgent = new Agent()
require('node:https').globalAgent = new HttpsAgent()



// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(process.env.botToken);

client.on('messageCreate',async(message)=>{
    let randomVal = Math.random()
    console.log(randomVal, parseFloat(process.env.chance))
    if (message.author.id!==client.user.id && randomVal < parseFloat(process.env.chance)) {
        message.reply('hello i am jiggly dog')
    }
})
