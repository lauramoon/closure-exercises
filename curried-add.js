function curriedAdd(total) {
  let sumTotal = 0;

  function curriedAddRecursive(total) {
    if (arguments.length === 0) {
      return sumTotal;
    } else {
      sumTotal += total;
      return curriedAddRecursive;
    }
  }

  if (arguments.length === 0) {
    return 0;
  } else {
    sumTotal = total;
    return curriedAddRecursive;
  }
}

module.exports = { curriedAdd };
