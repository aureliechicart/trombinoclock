const client = require('./dbClient');

const dataMapper = {
    getAllPromos: (callback) => {
        const sql = 'SELECT * FROM "promo" ';
        client.query(sql, callback);
    },

    getPromoById: (promoId, callback) => {
        const sql = `SELECT * FROM "promo" WHERE "id"= $1`;
        client.query(sql, [promoId], callback);
    },

    getStudentsByPromoId: (promoId, callback) => {
        const sql = `SELECT * FROM "student" WHERE "promo_id" = $1`;
        client.query(sql, [promoId], callback);
    },

    getStudentById: (studentId, callback) => {

        const sql = `SELECT * FROM "student" WHERE "id"= $1`;
        client.query(sql, [studentId], callback);
    },
    getStudentsByPromoId: (promoId, callback) => {
        const sql = `SELECT * FROM "student" WHERE "promo_id" = $1`;
        client.query(sql, [promoId], callback);
    },


};

module.exports = dataMapper;