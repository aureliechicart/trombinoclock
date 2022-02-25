const authController = {

  getLoginForm: (req, res, next) => {
      res.render('login');
  },

  postLoginForm: (req, res, next) => {
      console.log(req.body);
      req.session.username = req.body.username;
      res.redirect('/');
  }

};

module.exports = authController;