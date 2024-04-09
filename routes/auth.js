import express from 'express';

import { validateBodyUser, validateBody } from '../middlewares/validateBody.js';
import { authenticate } from '../middlewares/authenticate.js';
import { cntrlWrapper } from '../helpers/cntrlWrapper.js';

import { registerSchema, loginSchema, subscriptionSchema } from '../schemas/userSchemas.js';
import {
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
} from '../controllers/authControllers.js';

const authRouter = express.Router();

const message = 'Помилка від Joi або іншої бібліотеки валідації';

authRouter.post('/register', validateBodyUser(registerSchema, message), cntrlWrapper(register));

authRouter.post('/login', validateBodyUser(loginSchema, message), cntrlWrapper(login));

authRouter.get('/current', authenticate, cntrlWrapper(getCurrent));

authRouter.post('/logout', authenticate, cntrlWrapper(logout));

authRouter.patch(
  '/',
  authenticate,
  validateBody(subscriptionSchema),
  cntrlWrapper(updateSubscription)
);

export default authRouter;
