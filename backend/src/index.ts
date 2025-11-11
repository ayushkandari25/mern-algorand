import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/mongo";
import algorandRoutes from "./routes/algorand.routes";


dotenv.config();


const app = express();
app.use(cors());
app.use(
  cors({
    origin: [
      "https://mern-algorand.vercel.app",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.json({ msg: "Backend running successfully" });
});

app.use("/api/algorand", algorandRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
