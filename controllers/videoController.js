const Video = require("../models/videoModel");

exports.getVideo = (req, res) => {
    const id = req.params.id;

    Video.findById(id, (err, video) => {
        if (err) return res.status(500).send("Erreur serveur.");
        if (!video) return res.status(404).send("Vidéo non trouvée.");

        Video.incrementCounter(id, (err2) => {
            if (err2) return res.status(500).send("Erreur lors de l'incrément.");
            res.send(video.url);
        });
    });
};

exports.getCounter = (req, res) => {
    const id = req.params.id;

    Video.getCounter(id, (err, row) => {
        if (err) return res.status(500).send("Erreur serveur.");
        if (!row) return res.status(404).send("Vidéo non trouvée.");

        res.json({ id, counter: row.counter });
    });
};
