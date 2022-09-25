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

//my add

bot.help((ctx) => {
  ctx.reply('Send /start to receive a greeting');
  ctx.reply('Send /keyboard to receive a message with a keyboard');
  ctx.reply('Send /quit to stop the bot');
}); bot.command('quit', (ctx) => {
  // Explicit usage
  ctx.telegram.leaveChat(ctx.message.chat.id);// Context shortcut
  ctx.leaveChat();
}); bot.command('keyboard', (ctx) => {
  ctx.reply(
    'Keyboard',
    Markup.inlineKeyboard([
      Markup.button.callback('First option', 'first'),
      Markup.button.callback('Second option', 'second'),
    ])
  );
});




bot
  .launch()
  .then(async () => {
    console.log(`[!] Telegram is connected`);

  })
  .catch((err) => console.log(`[-] Telegram bot failed`));
module.exports = bot;
