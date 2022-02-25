require('dotenv').config();

// we require the dataMapper
const dataMapper = require('../dataMapper');

const promoController = {

  promoList: (req, res) => {

    dataMapper.getAllPromos( (error, data) => {
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
    dataMapper.getPromoById(targetId, (error, data) => {
      if (error) {
        // If the promo is not found, we return an 500-status error
        res.status(500).send(error);
      } else {
        // If there is a match among promos, we save it in a variable
        // Since data.rows is an array, we save the first element of the array 
        const promo = data.rows[0];

        //if (promo === undefined)
        if (!promo) {
          // we didn't find the promo => 404
          next();
        } else {
          // Then we send another query to the database to get all students who belong to this promo
          dataMapper.getStudentsByPromoId(targetId, (error, data) => {
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
        }
      };
    });
  },
}

module.exports = promoController;