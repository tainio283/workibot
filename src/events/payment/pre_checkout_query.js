module.exports = {
  name: "pre_checkout_query",
  async execute(ctx, bot) {
    ctx.answerPreCheckoutQuery(true);
  },
};
