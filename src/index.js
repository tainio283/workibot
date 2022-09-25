const { token, provider_token, number, payment_amount } = require("../config");

if (!token || !provider_token || !number || !payment_amount)
  return console.log("[!] Missing Info");
require("./bot");

process.on("unhandledRejection", (promise, reason) => {
  console.log("Unhandled Rejection at:", promise);
});
