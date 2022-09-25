const fs = require("fs");
const r1mo = require("../utilities/r1mo");
const { getUser } = require("../utilities/getDB");
module.exports = async (bot, session) => {
  const commandsFolders = fs.readdirSync("./src/commands/");
  const commandsArray = [];
  for (const folder of commandsFolders) {
    const commandFiles = fs
      .readdirSync(`./src/commands/${folder}`)
      .filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
      const command = require(`../commands/${folder}/` + file);
      command.category = folder;
      bot.command(command.name, async (ctx) => {
        command.execute(
          ctx,
          session(bot),
          r1mo,
          (await getUser(ctx)) || { admin: false, balance: 0 }
        );
      });
      await bot.commands.set(command.name, command);
      commandsArray.push({
        command: command.name,
        description: command.description,
      });
    }
  }
  await bot.telegram.setMyCommands(commandsArray);
};
