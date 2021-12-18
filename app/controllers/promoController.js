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
}

module.exports = promoController;