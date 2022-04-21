const defineAction = (constant, options) => {
    const methods = {};
    options.forEach((option) => {
      methods[option] = `${constant}_${option}`;
    });
    return methods;
  };

export default defineAction;