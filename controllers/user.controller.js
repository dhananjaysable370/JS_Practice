import { userModel } from '../models/user.model.js'
export const create = async (req, res) => {
    try {
        const createUser = new userModel(req.body);
        if (!createUser) {
            res.status(400).json({ success: false, message: "Failed to create user!" });
        }
        const data = await createUser.save();
        res.status(200).json({ success: true, message: "User created successfully..", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error!" });
    }
}

export const getallusers = async (req, res) => {
    try {
        const users = await userModel.find({});
        if (!users) {
            res.status(404).json({ success: false, message: "No user found!" });
        }
        res.status(200).json({ success: true, users });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}