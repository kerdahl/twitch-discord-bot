require('dotenv').config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const DISCORD_CHANNEL = process.env.DISCORD_CHANNEL;
const TWITCH_TOKEN = process.env.TWITCH_TOKEN;
const TWITCH_USER = process.env.TWITCH_USER;
const TWITCH_CHANNEL = process.env.TWITCH_CHANNEL;
const DEBUG = process.env.DEBUG;
const MONGO_STRING = process.env.MONGO_STRING;

module.exports = {
  DISCORD_CHANNEL,
  DISCORD_TOKEN,
  TWITCH_CHANNEL,
  TWITCH_TOKEN,
  TWITCH_USER,
  DEBUG,
  MONGO_STRING
};
