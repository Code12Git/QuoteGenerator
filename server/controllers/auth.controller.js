import bcrypt from 'bcryptjs';
import { errors } from '@vinejs/vine';
import { registerSchema } from '../validation/authValidation.js';
import { loginSchema } from '../validation/authValidation.js';
import vine from '@vinejs/vine';
import jwt from 'jsonwebtoken';
import { CustomErrorReporter } from '../validation/CustomErrorReporter.js';
import User from '../models/user.model.js';

//Register Controller

export const RegisterController = async (req, res) => {
  try {
    vine.errorReporter = () => new CustomErrorReporter();
    const validator = vine.compile(registerSchema);
    const payload = await validator.validate(req.body);
    const emailCount = await User.countDocuments({ email: email });

    if (emailCount > 0) {
      return res.status(409).json({ message: 'Email already exists' });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(payload.password, saltRounds);

    const user = await User.create({
      email: payload.email,
      username: payload.username,
      password: hashedPassword,
    });

    return res.status(200).json({
      success: true,
      message: 'User registered successfully',
      user,
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return res.status(400).json({ errors: error.messages });
    } else {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, message: 'Internal Server Error' });
    }
  }
};

//Login Controller
export const LoginController = async (req, res) => {
  try {
    vine.errorReporter = () => new CustomErrorReporter();
    const validator = vine.compile(loginSchema);
    const payload = await validator.validate(req.body);
    const isEmailExist = await User.findUnique({
      email: payload.email,
    });
    if (!isEmailExist) {
      return res.status(400).json({
        success: false,
        message: 'Email does not exist',
      });
    }
    const isPasswordValid = bcrypt.compareSync(
      payload.password,
      isEmailExist.password,
    );
    if (!isPasswordValid) {
      return res.status(400).json({
        message: 'Invalid Credentials',

        success: false,
      });
    }
    const token = jwt.sign(
      {
        id: isEmailExist.id,
      },
      process.env.SECRET_KEY,
      { expiresIn: '1d' },
    );
    return res.status(200).json({
      message: 'User logged in successfully',
      user: isEmailExist,
      token,
      success: true,
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return res.status(400).json({ errors: error.messages });
    } else {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, message: 'Internal Server Error' });
    }
  }
};
