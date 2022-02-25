const dataMapper = require('../dataMapper');

const studentController = {

    studentDetails: (req, res, next) => {

        const targetId = req.params.id;

        dataMapper.getStudentById(targetId , (error, result) => {
            if (error) {
              console.log(error);
                res.status(500).send(error);
            } else {
                console.log(result);

                const student = result.rows[0];

                console.log("STUDENT : ",student);

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