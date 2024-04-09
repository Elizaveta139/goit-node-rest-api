import HttpError from '../helpers/HttpError.js';

export const validateBody = schema => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

export const validateBodyUser = (schema, errorMessage) => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      next(HttpError(400, errorMessage));
    }
    next();
  };

  return func;
};
