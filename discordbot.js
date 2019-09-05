const settings = require('./settings');
const Discord = require('discord.js');
const logger = require('./errorlog');
const client = new Discord.Client();
let channel = null;

client.on('ready', () => {
  console.log('Discord loaded');
  const id = settings.DISCORD_CHANNEL;
  channel = client.channels.get(id);
  if (settings.DEBUG === 'yes') {
    console.log(channel.permissionOverwrites);
  }
});

const sendMessage = msg => {
  try {
    channel.send('```' + msg + '```');
    console.log('Message logged in Discord.');
  } catch (err) {
    const data = {
      message: msg,
      discord_channel_id: settings.DISCORD_CHANNEL,
      discord_channel: channel
    };
    logger.log(err, data);
  }
};

console.log('Logging in to Discord');
client.login(settings.DISCORD_TOKEN);

module.exports = {
  sendMessage
};
