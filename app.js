const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*", 
    methods: ["GET", "POST"],
  })
);

// Routes
const audienceRoutes = require("./routes/audienceRoutes");
app.use("/audience", audienceRoutes);
const contactRoutes = require("./routes/contactRoutes");
app.use("/contact", contactRoutes)

// Route de base
app.get("/", (req, res) => {
  res.send("🚀 API Portfolio en marche !");
});

app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
