require("dotenv").config()
const axios = require('axios');
const ALCHEMY_URL = process.env.API_KEY;

axios.post(ALCHEMY_URL, {
  jsonrpc: "2.0",
  id: 1,
  method: "eth_getBlockByNumber",
  params: [
    "0xb443",
    true
  ]
}).then((response) => {
  console.log(response.data.result);
});

axios.post(ALCHEMY_URL, {
  jsonrpc: "2.0",
  id: 1,
  method: "eth_gasPrice",
  params: []
}).then((response) => {
  console.log("GAS PRICE:", Number(response.data.result));
})