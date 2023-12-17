import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

//for testing
app.get("/", (req, res) => {
  res.send("api is working");
});

//database connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo database connected");
  } catch (err) {
    console.log("Mongo database connection failed");
  }
};

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.listen(port, () => {
  connect();
  console.log("server is listening on port", port);
});
