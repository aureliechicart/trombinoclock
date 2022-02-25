const dataMapper = require('../dataMapper');

const adminController = {

    showAddStudentForm: (req, res, next) => {
        dataMapper.getAllPromos( (error, data) => {
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

    }

};

module.exports = adminController;