import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const openaiKey = process.env.OPENAI_API_KEY;
console.log("OpenAI Key Loaded:", openaiKey ? "Yes, it's working!" : "Nope!");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Gradify backend is running!");
});

// Placeholder for AI integration
app.post("/ai", async (req, res) => {
  res.json({ message: "AI feature here - need to do still, I don't know (Youtube saved my ahh" });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
