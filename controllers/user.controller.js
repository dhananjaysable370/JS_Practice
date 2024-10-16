const User = require('../models/user.js');
export const create = async (req, res) => {
    try {
        const createUser = new User(req.body);
        if (!createUser) {
            res.status(400).json({ success: false, message: "Failed to create user!" });
        }
        const data = await createUser.save();
        res.status(200).json({ success: true, message: "User created successfully..", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error!" });
    }
}