const settings = require('./settings');
const Discord = require('discord.js');
const client = new Discord.Client();
let channel = null;

client.on('ready', () => {
  console.log('Discord loaded');
  const id = settings.DISCORD_CHANNEL;
  channel = client.channels.get(id);
  console.log(channel);
});

const sendMessage = msg => {
  try {
    const timestamp = new Date(msg.timestamp);
    const timeString = `${timestamp.getUTCMonth() +
      1}/${timestamp.getUTCDate()} ${timestamp.getUTCHours()}:${timestamp.getUTCMinutes()}:${timestamp.getUTCSeconds()}`;
    const message = `${timeString} ${msg.username}: ${msg.message}`;
    console.log('Sending message to Discord');
    channel.send(message);
    console.log('Message sent.');
  } catch (err) {
    console.error(err);
  }
};

console.log('Logging in to Discord');
client.login(settings.DISCORD_TOKEN);

module.exports = {
  sendMessage
};
