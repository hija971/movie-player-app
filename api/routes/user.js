import express from 'express';
import User from '../models/User.js';
import CryptoJS from 'crypto-js';
import verify from '../verifyToken.js';

const router = express.Router();
// UPDATE
router.put('/:id', verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id,
                {
                    $set: req.body,
                },
                {
                    new: true,
                }
            )
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can update only your account!");
    }
});

// DELETE

router.delete('/:id', verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted...");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can delete only your account!");
    }
});

// GET USER

router.get('/find/:id', verify, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...info } = user._doc;
        res.status(200).json(info);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL USERS

router.get('/', verify, async (req, res) => {
    const query = req.query.new;
    if (req.user.isAdmin) {
        try {
            let users;
            if (query) {
                users = await User.find().sort({ _id: -1 }).limit(5);
            } else {
                users = await User.find();
            }

            if (users.length > 0) {
                res.status(200).json(users);
            } else {
                res.status(404).json("No users found!");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed to see all users!");
    }
});

// GET USER STATS

router.get('/stats', async (req, res) => {
    const today = new Date();
    const lastYear = new Date(today);
    lastYear.setFullYear(lastYear.getFullYear() - 1);

    try {
        const data = await User.aggregate([
            {
                $match: {
                    createdAt: { $gte: lastYear }, // Lấy người dùng được tạo trong 1 năm qua
                },
            },
            {
                $group: {
                    _id: { $month: "$createdAt" }, // Nhóm theo tháng
                    total: { $sum: 1 }, // Đếm số lượng người dùng trong từng tháng
                },
            },
            {
                $sort: { _id: 1 }, // Sắp xếp theo thứ tự tháng
            },
        ]);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: "Không thể lấy dữ liệu thống kê." });
    }
});

export default router;