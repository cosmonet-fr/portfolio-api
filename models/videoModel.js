const db = require("../config/database");

const Video = {
    findById: (id, callback) => {
        db.get("SELECT * FROM videos WHERE id = ?", [id], (err, row) => {
            callback(err, row);
        });
    },

    incrementCounter: (id, callback) => {
        db.run("UPDATE videos SET counter = counter + 1 WHERE id = ?", [id], function (err) {
            callback(err, this.changes);
        });
    },

    getCounter: (id, callback) => {
        db.get("SELECT counter FROM videos WHERE id = ?", [id], (err, row) => {
            callback(err, row);
        });
    }
};

module.exports = Video;
