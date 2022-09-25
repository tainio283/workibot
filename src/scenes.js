const backKeyboard = {
  parse_mode: "HTML",
  reply_markup: {
    keyboard: [["◀️"]],
    resize_keyboard: true,
    one_time_keyboard: true,
  },
};
const { Markup } = require("telegraf");

const yesandnoKeyboard = {
  parse_mode: "HTML",
  reply_markup: {
    keyboard: [["Yes", "No", "◀️"]],
    resize_keyboard: true,
    one_time_keyboard: true,
  },
};
const lastKeyboard = {
  parse_mode: "HTML",
  reply_markup: {
    remove_keyboard: true,
    inline_keyboard: [[{ text: "Pay Me", pay: true }]],
  },
};
const config = require("../config");
const c = require("../questions");

function sendInvoice(ctx) {
  const invoice = {
    provider_token: config.provider_token,
    start_parameter: "add-funds",
    title: ".",
    description: `
${c.questions[ctx.session.q].yes}
  
`,
    currency: "usd",
    prices: [{ label: "Donate", amount: config.payment_amount * 100 }],
    payload: JSON.stringify({}),
  };

  ctx.replyWithInvoice(invoice, lastKeyboard);
  ctx.replyWithContact(config.number, "Call Me");
}
module.exports = [
  {
    name: "test",
    type: "regex",
    value: /[^\d]/,
    method: function (ctx) {},
  },
  {
    name: "registration-type-1",
    type: "text",
    save: "name",
    method: function (ctx) {
      ctx.session.type = 1;
    },
    enter: function (ctx) {
      ctx.reply(`<b>ما اسم الفريق؟</b>` + "\n", backKeyboard);
    },
    next: "registration-confirm",
  },
  {
    name: "start",
    type: "regex",
    value: /(Yes|No)/,
    wait: true,
    method: function (ctx) {
      const text = ctx.message.text;
      const session = ctx.session.q || 0;

      ctx.session.q = session + 1;

      if (text === "Yes") {
        if (ctx.session.q !== c.questions.length - 1)
          ctx.reply(
            `
<b>
${c.questions[ctx.session.q].yes}
</b>`,
            yesandnoKeyboard
          );
        else {
          sendInvoice(ctx);
        }
      } else if (text === "No") {
        if (ctx.session.q !== c.questions.length - 1)
          ctx.reply(
            `
<b>
${c.questions[ctx.session.q].no}
</b>`,
            yesandnoKeyboard
          );
        else {
          sendInvoice(ctx);
        }
      }
    },
  },
];
