// const db = require('../models');
const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.Post.findAll({})
        .then (dbPost => res.json(dbPost))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Post.fineOne({ where: { id: req.params.id } })
        .then (dbPost => res.json(dbPost))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Post.create(req.body)
        .then(dbPost => res.json(dbPost))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Post.update(req, body, { where : { id: req.params.id } })
        .then(dbPost => res.json(dbPost))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Post.destroy({ where: { id: req.params.id } })
        .then(dbPost => res.json(dbPost))
        .catch(err => res.status(422).json(err));
}
};


