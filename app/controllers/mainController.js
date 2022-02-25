// role of this controller: manage the "basic" pages (home, contact, legal)

const mainController = {
  homePage: (req, res, next) => {
    // we check if there is a user in session
    let username = req.session.username || 'Inconnu';

    console.log(req.session);

    res.render('homePage', {
        username
    });
  }
};

module.exports = mainController;