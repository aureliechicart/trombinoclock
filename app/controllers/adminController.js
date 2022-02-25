const dataMapper = require('../dataMapper');

const adminController = {

  getAddStudentForm: (req, res, next) => {
    dataMapper.getAllPromos((error, data) => {
      if (error) {
        console.error(error);
        res.status(500).send(error);
      } else {

        const promos = data.rows;
        res.render('addStudent', {
          promos
        });
      }
    });
  },

  postAddStudentForm: (req, res, next) => {
    dataMapper.insertNewStudent(req.body, (error, data) => {
      if (error) {
        console.error(error);
        res.status(500).send(error);
      } else {
        res.redirect(`/promo/${req.body.promo_id}`);
      }
    });
  }

};

module.exports = adminController;