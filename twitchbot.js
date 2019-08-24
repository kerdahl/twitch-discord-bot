const settings = require('./settings');
const discord = require('./discordbot');
const TwitchJs = require('twitch-js').default;

// Get data from settings
const token = settings.TWITCH_TOKEN;
const username = settings.TWITCH_USER;
const channel = settings.TWITCH_CHANNEL;

// Instantiate clients
//const { chat, chatConstants } = new TwitchJs({ token, username });
const { chat } = new TwitchJs({ token, username });

//const log = msg => console.log(msg);

// Log everything to console
//chat.on(chatConstants.EVENTS.ALL, log);

// Send Twitch chat messages to Discord
chat.on('PRIVMSG', msg => {
  console.log('Twitch message received: ', msg);
  discord.sendMessage(msg);
});

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
