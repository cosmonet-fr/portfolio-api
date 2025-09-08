const express = require("express");
const app = express();
const audienceRoutes = require("./routes/audienceRoutes");

app.use("/audience", audienceRoutes);

const PORT = 8585;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
