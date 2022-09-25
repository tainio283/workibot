const config = require("../../config");

module.exports.config = config;
module.exports.author = function (ctx) {
  var user;

  user = ctx.author || ctx.from;
  if (user.last_name) user.full_name = user.first_name + " " + user.last_name;
  else user.full_name = user.first_name;

  return user;
};
