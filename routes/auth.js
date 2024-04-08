import express from 'express';

import validateBody from '../middlewares/validateBody.js';
import { cntrlWrapper } from '../helpers/cntrlWrapper.js';

import { registerSchema, loginSchema } from '../schemas/userSchemas.js';
import { register, login } from '../controllers/authControllers.js';

const authRouter = express.Router();

const message = 'Помилка від Joi або іншої бібліотеки валідації';

authRouter.post('/register', validateBody(registerSchema, message), cntrlWrapper(register));

authRouter.post('/login', validateBody(loginSchema, message), cntrlWrapper(login));

export default authRouter;
