import User from '../../models/User.js';

export default async (req, res, next) => {
    try {
        await User.findOneAndUpdate(req.user._id, { online: true });
        return res.status(200).json({
            success: true,
            response: {
                user: req.user,
                token: req.token
            },
            messages: ['signed in!']
        });
    } catch (error) {
        return next(error);
    }

}