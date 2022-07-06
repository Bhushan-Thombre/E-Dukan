import expressAsyncHandler from 'express-async-handler';
import asycnHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc Auth user and get token
// @route POST /api/users/login
// @access Public
const authUser = asycnHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

export { authUser };
