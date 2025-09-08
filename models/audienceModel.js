const db = require("../config/database");

const Audience = {
    findById: (id, callback) => {
        db.get("SELECT * FROM audience WHERE id = ?", [id], (err, row) => {
            callback(err, row);
        });
    },

    incrementCounter: (id, callback) => {
        db.run("UPDATE audience SET counter = counter + 1 WHERE id = ?", [id], function (err) {
            callback(err, this.changes);
        });
    },

    getCounter: (id, callback) => {
        db.get("SELECT counter FROM audience WHERE id = ?", [id], (err, row) => {
            callback(err, row);
        });
    },

    findAll: (callback) => {
        db.all("SELECT * FROM audience", (err, rows) => {
            callback(err, rows);
        });
    }
};

module.exports = Audience;
