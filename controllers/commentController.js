const db = require('../models');

module.exports = {
    findAll: function(req, res) { // findAll is a method that finds all comments //
        db.Comment.findAll({})
        .then (dbComment => res.json(dbComment))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) { // findById is a method that finds a comment by its id //
        db.Comment.findOne({ where: { id: req.params.id } })
        .then (dbComment => res.json(dbComment))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) { // create is a method that creates a new comment //
        db.Comment.create(req.body)
        .then(dbComment => res.json(dbComment))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) { // update is a method that updates a comment by its id //
        db.Comment.update(req, body, { where : { id: req.params.id } })
        .then(dbComment => res.json(dbComment))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) { // remove is a method that removes a comment by its id //
        db.Comment.destroy({ where: { id: req.params.id } })
        .then(dbComment => res.json(dbComment))
        .catch(err => res.status(422).json(err));
    }
};

