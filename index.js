import express from "express";
import cors from "cors";
// require("dotenv")["config"]();
import chalk from "chalk";
const app = express();
app.use(express.urlencoded({ extended: true}));
import fs from 'fs';
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3500;
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


import os from "os";

const localIP = getLocalIPAddress(); 



// Function to get the local IP address
function getLocalIPAddress() {
  const networkInterfaces = os.networkInterfaces();

  // Iterate over network interfaces to find the IPv4 address of the first non-loopback interface
  for (const interfaceName in networkInterfaces) {
      const addresses = networkInterfaces[interfaceName];
      for (const address of addresses) {
          if (!address.internal && address.family === 'IPv4') {
              return address.address;
          }
      }
  }

  // Return a default value if no valid IP address is found
  return '127.0.0.1';
}

// import { handler } from "file://D:/projects/JTVServer github/WEB/build/handler.js";


if (!fs.existsSync("channel.db")) {
  fs["writeFileSync"]("./channel.db", '{"channel": {}}');
}

if (!fs.existsSync("channel-catchup.db")) {
  fs["writeFileSync"]("./channel-catchup.db", '{"channel": {}}');
}

app.get("/login.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
})

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});
app.get("/admin.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.use(cors());

import loginRoute from './routes/login.mjs';
import ipRoute from "./routes/ip.mjs";
import channelsRoute from "./routes/channel.mjs";
import playlistRoute from "./routes/playlist.mjs";
import catchulRoute from "./routes/catchup/index.mjs";

app.use("/", loginRoute);
app.use("/", ipRoute);
app.use("/", channelsRoute);
app.use("/", playlistRoute);
app.use("/catchup", catchulRoute);


// app.use(express.static(path.join(__dirname, "public")));
import { handler } from "./build/handler.js";

app.use(handler);

app.listen(PORT, () => {
  console.log("===================================================================");
  console.log(chalk.green("THIS SERVER IS 100% FREE. PLEASE DON'T PAY ANYONE."));
  console.log(chalk.green("STRICT ACTION WILL BE TAKEN AGAINST THOSE WHO ARE SELLING THIS."));
  console.log(chalk.green("IF ANYONE TRYING TO SELL IT, PLEASE REPORT IT ON OUR DISCORD SERVER\nhttps://discord.gg/suyzkCQKhC"));
  console.log(chalk.green("Please Stare Repo https://github.com/dhruv-2015/JIOTVServer"));
  console.log(chalk.green("Please Stare my Repo too : https://github.com/thundersky7/JIOTVServer"));
  console.log(chalk.green("ThunderSky7 : JIO TV"));
  console.log(chalk.green("VERSION 2.8.6"));
    console.log(chalk.green("980+ CHANNELS AVAILABLE. MORE FEATURES WILL COME SOON. STAY TUNED"));
    console.log("===================================================================");
    console.log(chalk.red("       __ ____ ____     ______ _    __ \n      / //  _// __ \\   /_  __/| |  / / \n __  / / / / / / / /    / /   | | / /  \n/ /_/ /_/ / / /_/ /    / /    | |/ /   \n\\____//___/ \\____/    /_/     |___/    \n                                "));
    console.log("===================================================================");
    console.log(chalk.green(`TV server : http://${localIP}:${PORT}`));
    console.log(chalk.green(`Login Portal : http://${localIP}:${PORT}/login`));
    console.log(chalk.green(`IPTV Playlist : http://${localIP}:${PORT}/playlist`));
    console.log("===================================================================");
    console.log(`IPTV Playlist (if hosting & playing on same device) : http://localhost:${PORT}/playlist`);
    console.log(`Please open http://${localIP}:${PORT}/login or http://localhost:${PORT}/login to login and get playlist if running server for the first time`);
    // console.log(chalk.red("need to login every 24 hours even if you are already logged in"));
    console.log("If facing any errors, please login from portal again");
    console.log("you can use server m3u8 links in other websites and apps");
});
