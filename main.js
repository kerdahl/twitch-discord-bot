require('dotenv').config();
const express = require('express');
const twitchbot = require('./twitchbot');

const port = process.env.PORT;
const app = express();
app.listen(port, () => console.log(`Listening at port ${port}...`));
app.get('/*', (request, response) => {
  response.redirect('https://www.twitch.tv/inexpensivegamer/');
});

console.log('Loading bot...');
twitchbot.connect();
