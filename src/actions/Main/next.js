const c = require("../../../questions");

module.exports = {
  name: "next",
  async execute(ctx, bot, r1mo, args, user) {
    ctx.editMessageText(
      `
<b>
${c.next}
</b>

`,
      {
        parse_mode: "HTML",
        reply_markup: {
          remove_keyboard: true,
          inline_keyboard: [[{ text: "Start", callback_data: "start" }]],
        },
      }
    );
  },
};
