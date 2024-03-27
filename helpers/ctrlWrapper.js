const ctrlWrapper = (ctrl) => {
  const func = async (req, res, next) => {
    try {
      await (req, res, next);
    } catch (error) {
      next(error);
    }
  };

  return func;
};

export default ctrlWrapper;
