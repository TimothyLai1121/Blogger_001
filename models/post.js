const Sequelize = require('sequelize');
// adding sequelize const sequelize = require('../config/connection.js) later after setting up //
// const sequelize = require('../config/connection.js');
 
const User = require('./user');

const Post = sequelize.define('post', {
    title: {
        type: Sequelize.STRING, // Sequelize.STRING means VARCHAR(255)
        allowNull: false // allowNull false means a title is required before creating a new post //
    },
    content: {
        type: Sequelize.TEXT,
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

// Post.belongsTo(User) means a post belongs to a user //
Post.belongsTo(User, {
    foreignKey: {
        allowNull: false
    }
});

// module.exports means we can use this model in other files by using require //
module.exports = Post;

