/**
 * Is Prime
Define a function isPrime/is_prime() that takes one integer argument and returns true/True or false/False depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 */

let isPrime = (num) => {
  for(var i = 1; i < num; i++) {
    for(var j = 2; j < num; j++) {
      if( (i*j) === num) {
        return false;
      }
    }
  }
    return true;
}