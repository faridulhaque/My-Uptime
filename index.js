const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Server running");
});

const urls = [
  process.env.HEAVEN_CHAT,
  process.env.TASK_FLOW,

];

const hitApi = async () => {
  for (const url of urls) {
    try {
      const res = await axios.get(url);
      console.log(url, res.data);
    } catch (e) {
      console.log(url, "Error hitting API");
    }
  }
};

setInterval(hitApi, 5000);

app.listen(3000);
