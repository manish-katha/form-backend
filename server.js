import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; 
import formrouter from "./routes/formRoutes.js";

import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.use("/api/form", formrouter);


connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
