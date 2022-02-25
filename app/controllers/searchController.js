const dataMapper = require("../dataMapper");

const searchController = {

    searchAllByName: (req, res) => {

        const searchedTerm = req.query.search;
        dataMapper.searchByName( searchedTerm, (error, data) => {
            if (error) {
                console.error(error);
                res.status(500).send(error);
            } else {
                const results = data.rows;

                res.render('searchResults' , {
                    results
                });
            }

        });


    }

};

module.exports = searchController;