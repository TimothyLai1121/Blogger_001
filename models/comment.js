const Sequelize = require('sequelize');
// adding sequelize const sequelize = require('../config/connection.js) later after setting up //
// const sequelize = require('../config/connection.js');
const sequelize = require('../config/connection');

const User = require('./user');
const Post = require('./post');

const Comment = sequelize.define('comment', {
    content: {
        type: Sequelize.TEXT, // Sequelize.TEXT means TEXT //
        allowNull: false // allowNull false means a content is required before creating a new post //
    },
    createdAt: {
        type: Sequelize.DATE, // Sequelize.DATE means DATETIME //
        defaultValue: Sequelize.NOW // Sequelize.NOW means the current date and time //
    },
    updatedAt: {
        type: Sequelize.DATE, // Sequelize.DATE means DATETIME //
        defaultValue: Sequelize.NOW // Sequelize.NOW means the current date and time //
    }
});


// Comment.belongsTo(Post) means a comment belongs to a post //
Comment.belongsTo(Post, {
    foreignKey: {
        allowNull: false
    }
});

module.exports = Comment;

