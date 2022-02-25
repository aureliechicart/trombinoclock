const dataMapper = require('../dataMapper');

const studentController = {

    studentDetails: (req, res, next) => {

        const targetId = req.params.id;

        dataMapper.getStudentById(targetId , (error, result) => {
            if (error) {
                res.status(500).send(error);
            } else {
                const student = result.rows[0];

                if (!student) {
                    next();
                } else {
                    res.render('studentDetails', {
                        student
                    });
                }
            }
        });

    }

};

module.exports = studentController;