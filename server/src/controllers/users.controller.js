require('dotenv').config();
const User = require('../models/users.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function signup(req, res) {
    //Signup
    const userDetails = req.body;
    console.log(userDetails);

    try {
        if (!userDetails) throw Error('User details not provided');

        const { name, email, password } = userDetails;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userDetails.password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();

        res.status(201).json({
            success: 201,
            message: 'User created successfully',
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: 500,
            message: 'Internal Server Error'
        });
    }
}

async function login(req, res) {
    //Login
    const userDetails = req.body;
    try {
        if (!userDetails) throw Error('User details not provided');

        const { email, password } = userDetails;

        const user = await User.findOne({ email });

        if (!user) throw Error('User not found')

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) throw Error('Invalid credentials');

        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(200).json({
            success: 201,
            token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal Server Error',
            success: 500
        });
    }

}

module.exports = {
    signup,
    login
};
