const { author } = require("./r1mo");

module.exports = {
  getUser: async (ctx) => {
    const u = author(ctx);
    return u;
  },
};
