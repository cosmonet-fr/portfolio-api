const express = require("express");
const app = express();
const videoRoutes = require("./routes/videoRoutes");

app.use("/video", videoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
