const c = require("../../../questions");
const yesandnoKeyboard = {
  parse_mode: "HTML",
  reply_markup: {
    keyboard: [["כן", "לא"]],
    resize_keyboard: true,
    one_time_keyboard: true,
  },
};
module.exports = {
  name: "start",
  async execute(ctx, bot, r1mo, args, user) {
    ctx.reply(
      `
<b>
${c.questions[0].q}
</b>

`,
      yesandnoKeyboard
    );
    await ctx.scene.enter("start");
  },
};
