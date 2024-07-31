import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors"

import bookRoute from "./route/book_route.js"
import userRoute from "./route/user_route.js"
import messageRoute from "./route/messageRoute.js"; 


const app = express();
// middleware
app.use(cors());
app.use(express.json()) //json parse what data given in body

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process with failure
  }
};

// Connect to MongoDB
connectToDatabase();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
// Define routes
app.use("/book", bookRoute); // Assuming you have this route
app.use("/user",userRoute);
app.use("/message", messageRoute); // Correcting the path
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
