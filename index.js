const express = require("express");

require("dotenv").config();

const morgan = require("morgan");
const router = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//DB Setup
const mongoUri = `${process.env.MONGO_DB}`;
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});
// App setup
const whitelist = [
  "http://localhost:3000",
  "rfuw-engineering.com",
  "https://rfuw-engineering.netlify.app",
  "https://rfuw-engineering-rzzso.ondigitalocean.app"
];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, true);
      // callback(new Error("Not allowed by CORS"));
    }
  }
};
//app.use(express.json({ limit: "50mb" }));
//app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors(corsOptions));
app.use(morgan("combined"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0"
  );
  next();
});

router(app);

const port = process.env.PORT || 5001;
app.listen(port);

console.log("App is listening on port " + port);
