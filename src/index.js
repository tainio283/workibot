
const express = require('express')

const { token, provider_token, number, payment_amount } = require("../config");

if (!token || !provider_token || !number || !payment_amount)
  return console.log("[!] Missing Info");
require("./bot");


const app = express()
app.use(express.static('public'))
app.get('/', function (req, res) {
  res.send(
    "<h1>Hello There! You found <a href='https://t.me/workishai_bot'>@workishai_bot</a> backend</h1>"
  )
})

process.on("unhandledRejection", (promise, reason) => {
  console.log("Unhandled Rejection at:", promise);
});


app.listen(process.env.PORT || 3000, () => console.log('Server is running...'))