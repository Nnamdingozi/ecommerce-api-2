
'use strict'



const { User } = require('../database/models');

//define actions to handle api requests
const getAllUsers = async () => {
        const users = await User.findAll();
        if(users) {
            return users;
        }
        
        throw new Error('invalid input');
    };

const getUserById = async (id) => {
        const user = await User.findByPk(id);
        if(user) {
            return user;
        } 
        throw new Error('user not found')
    };

const deleteUser = async (id) => {
    
   const result = await User.destroy({ where: { id } });
   return result;
}

module.exports = {
    getAllUsers,
    getUserById,
    deleteUser 

}