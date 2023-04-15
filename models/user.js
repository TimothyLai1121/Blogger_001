const Sequelize = require('sequelize');
// adding sequelize const sequelize = require('../config/connection.js) later after setting up //
const sequelize = require('../config/connection');

const User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING, // Sequelize.STRING means VARCHAR(255) //
        allowNull: false // allowNull false means a username is required before creating a new user //
        unique: true // unique true means a username must be unique //
    },
    email: {
        type: Sequelize.STRING, // Sequelize.STRING means VARCHAR(255) //
        allowNull: false // allowNull false means an email is required before creating a new user //
        unique: true // unique true means an email must be unique //
    },
    password: {
        type: Sequelize.STRING, // Sequelize.STRING means VARCHAR(255) //
        allowNull: false // allowNull false means a password is required before creating a new user //
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

// module.exports means we can use this model in other files by using require //
module.exports = User;
