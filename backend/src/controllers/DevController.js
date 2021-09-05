const Dev = require('../models/dev');
const axios = require('axios');

module.exports = {
    async index(req, res) {
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes } },
                { _id: { $nin: loggedDev.dislikes } },
            ]
        })

        return res.json(users);
    },

    async store(req, res) {
        const { username } = req.body;

        const userExists = await Dev.findOne({ user: username });

        if (userExists) {
            return res.json(userExists);
        }
        
        try {
            const { data } = await axios.get(
                `https://api.github.com/users/${username}`);
            
                const { name, bio, avatar_url: avatar } = data;
            
            const dev = await Dev.create({
                name, 
                user: username,
                bio, 
                avatar
            })

            return res.json(dev);
        } catch (err) {
            return res.status(404).json(err);
        }
    }
}