const settings = require('./settings');
const Discord = require('discord.js');
const client = new Discord.Client();
let channel = null;

client.on('ready', () => {
  console.log('Discord loaded');
  const id = settings.DISCORD_CHANNEL;
  channel = client.channels.get(id);
  if (settings.DEBUG === 'yes') {
    console.log(channel);
  }
});

const sendMessage = msg => {
  try {
    channel.send('```' + msg + '```');
    console.log('Message logged in Discord.');
  } catch (err) {
    console.error(err);
  }
};

console.log('Logging in to Discord');
client.login(settings.DISCORD_TOKEN);

module.exports = {
  sendMessage
};
