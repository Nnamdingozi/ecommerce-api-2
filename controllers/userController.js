'use strict'


const userService = require('../services/userService');


//define actions to handle api requests
const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({ message: 'user not found' }
            )
        }
    } catch (err) {
        res.status(500).json({ error: err.message });

    }
};

const deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const result = await userService.deleteUser(userId);
        if (result) {
            res.status(200).json({ message: `User withnID ${userId} deleted successfully` })
        } else {
            res.status(404).json({ message: 'User not found' })
        }

    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    deleteUser
};