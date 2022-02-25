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
        const sql = `SELECT * FROM "student" WHERE "promo_id" = $1 ORDER BY "last_name"`;
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
    insertNewStudent: (studentInfo, callback) => {
        console.log('dataMapper: ', studentInfo);
        const sql = `INSERT INTO "student" 
        ("first_name", "last_name", "github_username", "profile_picture_url", "promo_id") VALUES
        (
            '${studentInfo.first_name}',
            '${studentInfo.last_name}',
            '${studentInfo.github_username}',
            'http://github.com/${studentInfo.github_username}.png',
            ${studentInfo.promo_id}
        ) RETURNING *`;
        client.query( sql, callback );
    }


};

module.exports = dataMapper;