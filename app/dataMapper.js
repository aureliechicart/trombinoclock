const client = require('./dbClient');

const dataMapper = {
    getAllPromos: (callback) => {
        const sql = 'SELECT * FROM "promo" ';
        client.query( sql, callback );
    },

    getPromoById: () => {

    },

    getStudentsByPromoId: () => {

    },

    getStudentById: (studentId, callback) => {

        const sql = `SELECT * FROM "student" WHERE "id"= $1`;
        client.query(sql, [studentId], callback );
    }


};

module.exports = dataMapper;