const c = require("../../../questions");
module.exports = {
  name: "start",
  description: "Start the bot",
  allowGroup: true,
  async execute(ctx, bot, r1mo, user) {
    ctx.reply(
      `
<b>
${c.start}
</b>

`,
      {
        parse_mode: "HTML",
        reply_markup: {
          remove_keyboard: true,
          inline_keyboard: [
            [
              { text: "Improve an existing file", callback_data: "next" },
              { text: "Call ME", callback_data: "call" },
            ],
          ],
        },
      }
    );
  },
};
