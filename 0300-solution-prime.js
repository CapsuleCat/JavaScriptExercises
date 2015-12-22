function isPrime (p) {
  var prime = true,
      sqrt = Math.sqrt (p);

  for (var i = 0; i <= sqrt; i++) {
    if (p % i == 0) {
      prime = false;
      break;
    }
  }

  return prime;
}
