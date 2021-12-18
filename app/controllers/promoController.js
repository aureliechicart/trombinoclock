require('dotenv').config();

// we connect to the database
const pg = require('pg');
const client = new pg.Client(process.env.PG_URL);
client.connect();

const promoController = {

  promoList: (req, res) => {

    // we send a request to get all records from promo table and we render only when the database answers
    client.query('SELECT * FROM "promo"', (error, data) => {
      if (error) {
        // if we get a servor error, we send a 500-status error
        res.status(500).send(error);
      } else {
        // if there is no error, we get the results in the property rows of data
        //  rows is an array
        // we pass it on to the 'promoList' view
        const promos = data.rows;
        res.render('promoList', {
          promos
        });
      }
    });
  },

  promoDetails: (req, res, next) => {
    // getting the id from the request's params
    const targetId = parseInt(req.params.id);

    // Getting the promo which matches the target id
    // Using paramerterized query to avoid string concatenating parameters directly (tehrefore preventing SQL injections)
    client.query('SELECT * FROM "promo" WHERE "id" = $1', [targetId], (error, data) => {
        if (error) {
            // If the promo is not found, we return an 500-status error
            res.status(500).send(error);
        } else {
            // If there is a match among promos, we save it in a variable
            // Since data.rows is an array, we save the first element of the array 
            const promo = data.rows[0];
            // Then we send another query to the database to get all students who belong to this promo
            client.query('SELECT * FROM "student" WHERE "promo_id" = $1', [targetId], (error, data) => {
                if (error) {
                    // If no match is found, we return a 500-status error
                    res.status(500).send(error);
                } else {
                    // If we find students in the DB, we save the returned array in a variable called 'studentsOfPromo'
                    const studentsOfPromo = data.rows;
                    // we pass both the promo and the students to the ejs template 
                    res.render('promoDetails', {
                        promo,
                        studentsOfPromo
                    });
                }
            });
        };
    });
},
}

module.exports = promoController;