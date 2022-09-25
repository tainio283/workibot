const c = require("../../../config");

module.exports = {
  name: "call",
  async execute(ctx, bot, r1mo, args, user) {
    ctx.replyWithContact(c.number, "Call Me");
  },
};
