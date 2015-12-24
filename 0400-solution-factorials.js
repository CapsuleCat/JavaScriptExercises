function factorial(n) {
  var counter = 1;

  for (var i = 2; i <= n; i++) {
    counter *= i;
  }

  return counter;
}
