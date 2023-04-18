// const db = require('../models');
const db = require('../models/post');



module.exports = {
    findAll: function(req, res) { // findAll is a method that finds all posts //
        db.Post.findAll({})
        .then (dbPost => res.json(dbPost))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) { // findById is a method that finds a post by its id //
        db.Post.findOne({ where: { id: req.params.id } })
        .then (dbPost => res.json(dbPost))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) { // create is a method that creates a new post //
        db.Post.create(req.body)
        .then(dbPost => res.json(dbPost))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) { // update is a method that updates a post by its id //
        db.Post.update(req.body, { where : { id: req.params.id } })
        .then(dbPost => res.json(dbPost))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) { // remove is a method that removes a post by its id //
        db.Post.destroy({ where: { id: req.params.id } })
        .then(dbPost => res.json(dbPost))
        .catch(err => res.status(422).json(err));
}
};


