import HttpError from '../helpers/HttpError.js';

const validateBody = (schema, errorMessage = 'Bad Request') => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req.body);
    const errorMessg = errorMessage || error.message;

    if (error) {
      next(HttpError(400, errorMessg));
    }
    next();
  };

  return func;
};

export default validateBody;
