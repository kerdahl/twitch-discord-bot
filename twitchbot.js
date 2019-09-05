const settings = require('./settings');
const discord = require('./discordbot');
const TwitchJs = require('twitch-js').default;
const moment = require('moment');

// Get data from settings
const token = settings.TWITCH_TOKEN;
const username = settings.TWITCH_USER;
const channel = settings.TWITCH_CHANNEL;

// Instantiate clients
const { chat, chatConstants } = new TwitchJs({ token, username });

const log = msg => {
  if (settings.DEBUG === 'yes') {
    console.log(msg);
  }
};

// Log events
chat.on(chatConstants.EVENTS.ALL, log);

// Log regular chat messages
chat.on('PRIVMSG', msg => {
  const message = `${getTimestamp(msg)} - ${msg.username}: ${msg.message}`;
  discord.sendMessage(message);
});

// Log cheers
chat.on('PRIVMSG/CHEER', msg => {
  const message = `${getTimestamp(msg)} - ${msg.username} gave ${
    msg.bits
  } bits with message: ${msg.message}`;
  discord.sendMessage(message);
});

// Log resubs
chat.on('USERNOTICE/RESUBSCRIPTION', msg => {
  const resub = `${getTimestamp(msg)} - ${msg.systemMessage} - ${msg.message}`;
  discord.sendMessage(resub);
});

// Get human-readable timestamp from message
const getTimestamp = msg => {
  //const timestamp = new Date(msg.timestamp);
  //return `${timestamp.getUTCMonth() +
  //  1}/${timestamp.getUTCDate()} ${timestamp.getUTCHours()}:${timestamp.getUTCMinutes()} UTC`;
  return moment(msg.timestamp).format('M/D/YYYY H:mm [UTC]');
};

// Connect ...
const connect = async () => {
  console.log('Connecting to Twitch...');
  await chat.connect();
  console.log('Connected. Joining ', channel);
  chat.join(channel);
};

module.exports = {
  connect
};
