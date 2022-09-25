module.exports = async (bot) => {
  const telegraf = require("telegraf");
  const r1mo = require("./utilities/r1mo");
  const { getUser } = require("./utilities/getDB");
  const { session, Scenes } = telegraf;
  const Scene = Scenes.BaseScene;
  const { Stage } = Scenes;
  const stage = new Stage();
  const scenes = require("./scenes");
  async function checkcmd(ctx) {
    const cmd = /^\/[a-zA-Z]+$/;
    if (cmd.test(ctx.message.text) === true) {
      await ctx.scene.leave();
      const command = bot.commands.get(ctx.message.text.slice(1));
      if (command) {
        command.execute(ctx, bot, r1mo, await getUser(ctx));
      }
      return;
    }
  }
  async function back(ctx) {
    if (ctx.message.text === "◀️") {
      ctx.reply("cancelled", {
        reply_markup: {
          remove_keyboard: true,
        },
      });
      ctx.scene.leave();
      return;
    }
  }

  async function saveSession(ctx, q) {
    if (q.save) ctx.session[q.save] = ctx.message.text;
    if (q.method) {
      q.method(ctx);
    }
    if (!q.wait) await ctx.scene.leave();

    if (q.next) {
      await ctx.scene.enter(q.next);
    }
  }
  scenes.forEach((q) => {
    const sce = new Scene(q.name);
    stage.register(sce);
    switch (q.type) {
      case "regex": {
        sce.hears(q.value, (ctx) => {
          checkcmd(ctx);
          saveSession(ctx, q);
        });
        sce.on("text", (ctx, next) => {
          checkcmd(ctx);
          back(ctx);
        });
        if (q.enter) sce.enter((ctx) => q.enter(ctx));
        if (q.leave) sce.leave((ctx) => q.leave(ctx));
      }
      case "text": {
        sce.on("text", (ctx, next) => {
          checkcmd(ctx);
          back(ctx);
          saveSession(ctx, q);
        });
        if (q.enter) sce.enter((ctx) => q.enter(ctx));
        if (q.leave) sce.leave((ctx) => q.leave(ctx));
      }
      case "image": {
        sce.on("message", (ctx, next) => {
          checkcmd(ctx);
          back(ctx);
          saveSession(ctx, q);
        });
        if (q.enter) sce.enter((ctx) => q.enter(ctx));
        if (q.leave) sce.leave((ctx) => q.leave(ctx));
      }
    }
  });
  bot.use(session());
  bot.use(stage.middleware());
  return bot;
};
