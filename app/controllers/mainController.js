// role of this controller: manage the "basic" pages (home, contact, legal)

const mainController = {
  homePage: (req, res, next) => {
      res.render('homePage');
  }
};

module.exports = mainController;