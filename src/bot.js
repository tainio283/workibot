const telegraf = require("telegraf");
const config = require("../config.js");

const bot = new telegraf.Telegraf(config.token);
bot.actions = new Map();
bot.commands = new Map();
const session = require("./session");
session(bot);

require(`./handlers/Commands.js`)(bot, session);
require(`./handlers/Events.js`)(bot, session);
require(`./handlers/Actions.js`)(bot, session);



bot
  .launch()
  .then(async () => {
    console.log(`[!] Telegram is connected`);

  })
  .catch((err) => console.log(`[-] Telegram bot failed`));
module.exports = bot;
