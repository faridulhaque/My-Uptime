const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Hello world" });
});

const urls = [
  process.env.HEAVEN_CHAT,
  process.env.TASK_FLOW,
  process.env.MY_UPTIME,
];

let timer = 0;
<<<<<<< HEAD

// const hitApi = async () => {
//   for (const url of urls) {
//     try {
//       const finalUrl = timer >= 86400000 ? url + "?q=db" : url;
//       const res = await axios.get(finalUrl);
//       console.log(finalUrl, res.data);
//     } catch (err) {
//       console.log(url, "Error hitting API");
//     }
//   }

//   timer += 30000;
//   if (timer >= 86400000) timer = 0;
// };

// setInterval(hitApi, 30000);
=======
const intervalTime = 10000;
const hitApi = async () => {
  for (const url of urls) {
    try {
      const finalUrl = timer >= 86400000 ? url + "?q=db" : url;
      const res = await axios.get(finalUrl);
      console.log(finalUrl, res.data);
    } catch (err) {
      console.log(url, "Error hitting API");
    }
  }

  timer += intervalTime;
  if (timer >= 86400000) timer = 0;
};

setInterval(hitApi, intervalTime);
>>>>>>> 45d57a54474acf815211b7c7eab8a08ca56c1f3e

app.listen(5000);
