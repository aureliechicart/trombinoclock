// role of this controller: contain methods to handle errors

const errorController = {

  notFound: (req, res) => {
      res.status(404).send("not found");
  }

};

module.exports = errorController;