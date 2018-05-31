
const selectAllProject = require('./../database/queries/selectAllproject');
const search = require('./../database/queries/search.js');
const error = require('./error');


exports.get = (req, res) => {
  selectAllProject.limitProject((err, result) => {
    if (err) error.catchError(req, res);
    else {
      res.render('home', { result: result.rows, log: req.cookies.user, style: { style: 'css/style.css' } });
    }
  });
};
exports.post = (req, res) => {
  const word = req.body.name;

  search(word, (err, r) => {
    if (err) error.catchError(req, res);
    else {
      res.render('home', { r: r.rows });
    }
  });
};
