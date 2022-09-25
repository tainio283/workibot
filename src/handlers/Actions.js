const fs = require("fs");
const r1mo = require("../utilities/r1mo");
const { getUser } = require("../utilities/getDB");

module.exports = async (bot, session) => {
  const actionsFolders = fs.readdirSync("./src/actions/");
  for (const folder of actionsFolders) {
    const actionFiles = fs
      .readdirSync(`./src/actions/${folder}`)
      .filter((file) => file.endsWith(".js"));
    for (const file of actionFiles) {
      const action = require(`../actions/${folder}/` + file);
      action.category = folder;
      bot.action(action.name, async (ctx) => {
        action.execute(ctx, session(bot), r1mo, null, await getUser(ctx));
      });
      const re = new RegExp(
        `${action.name}_([a-zA-Z0-9]+|[a-zA-Z0-9]+_[a-zA-Z0-9]+)`
      );
      bot.action(re, async (ctx) => {
        const args = ctx.update.callback_query.data.split("_").slice(1);

        action.execute(ctx, session(bot), r1mo, args, await getUser(ctx));
      });
      await bot.actions.set(action.name, action);
    }
  }
};
