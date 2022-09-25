const { addBalance } = require("../../utilities/getDB");
module.exports = {
  name: "successful_payment",
  async execute(ctx, bot) {
    const payment = ctx.update.message.successful_payment;
    const user = await addBalance(ctx, payment.total_amount / 100);
    ctx.reply(
      `<b>${payment.total_amount / 100}€ has been added to your balance</b>
      
-----------------`,
      {
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [{ text: `Balance: ${user.balance}`, callback_data: "aaa" }],
          ],
        },
      }
    );
  },
};
