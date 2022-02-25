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
    },
    searchByName: (searchedWord, callback) => {
        // for the serach feature, we will look up both promo names and student names through a UNION
        // for the student, we will return first name + last name as one column named "name"
        const sql = {
            text: `(SELECT 'promo' as type,id, name
                    FROM "promo" 
                    WHERE name ILIKE $1)
                      UNION
                    (SELECT 'student' as type,"id",CONCAT("first_name",' ',"last_name") as "name" 
                    FROM "student" WHERE "first_name" ILIKE $1 OR "last_name" ILIKE $1)
                    ORDER BY "type", "name";`,
            values: [ '%'+searchedWord+'%' ]
        };
        client.query( sql, callback );
    }
};

module.exports = dataMapper;