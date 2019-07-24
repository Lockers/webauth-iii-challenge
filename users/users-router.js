const router = require('express').Router();
const db = require('./users-helpers');
const restricted = require('../middleware/restricted-middleware')


router.get('/', restricted, (req, res) => {
  db.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
