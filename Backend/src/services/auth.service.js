const bcrypt = require('bcrypt');
const pool = require('../config/db');
const { createToken} = require('../utils/AppError');

async function registerUser({nombre, email,password}) {
    if(!nombre || !email || !password) {
        throw new AppError('nombre, email y password son obligatorios', 400);
    }
    
}
