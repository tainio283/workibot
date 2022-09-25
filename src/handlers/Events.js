const fs = require("fs");
const r1mo = require("../utilities/r1mo");
const { getUser } = require("../utilities/getDB");

module.exports = (bot, session) => {
  const eventsFolders = fs.readdirSync("./src/events/");

  for (const folder of eventsFolders) {
    const eventFiles = fs
      .readdirSync(`./src/events/${folder}`)
      .filter((file) => file.endsWith(".js"));
    for (const file of eventFiles) {
      const event = require(`../events/${folder}/` + file);
      bot.on(event.name, async (ctx) => {
        event.execute(ctx, session(bot), r1mo, await getUser(ctx));
      });
    }
  }
};
