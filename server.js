const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "DevBank Backend is running 🚀",
    time: new Date().toISOString(),
  });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "UP" });
});

app.get("/api/user", (req, res) => {
  res.json({
    name: "DevBank User",
    role: "Customer",
    balance: 50000,
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
