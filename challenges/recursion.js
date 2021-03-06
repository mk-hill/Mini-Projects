// * Write two functions that finds the factorial of any positive integer.
// * One should use recursive, the other should just use a for loop

function findFactorialRecursive(n) {
  return n < 3 ? n : n * findFactorialRecursive(n - 1);
}

function findFactorialIterative(n) {
  let answer = n;
  for (let i = n; i > 1; i--) {
    answer *= i - 1;
  }
  return answer;
}

// * Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// * the pattern of the sequence is that each value is the sum of
// * the 2 previous values, that means that for N=5 → 2+3

// ! Single calculations var for all functions !
// ! run one at a time for accurate results !
let calculations = 0;

function fibonacciIterative(n) {
  if (n === 0 || n === 1) return n;
  let first = 0;
  let second = 1;
  for (let i = n; i > 0; i--) {
    calculations++;
    const tempSecond = second;
    second += first;
    first = tempSecond;
  }
  return first;
}

function fibonacciIterative2(n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    calculations++;
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

// fibonacciIterative(5);

// ! O(2^n) Exponential time !
// Not to mention horribly large stack -> space
// todo research tail call optimization

function fibonacciRecursive(n) {
  calculations++;
  return n < 2 ? n : fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// fibonacciRecursive(3);

// ? Dynamic programming ?
// ? Memoization ?

// Using closure for cache
// ? Nest ternary operators for return ?
// Leaving ifs for readability
function memoizedFibonnaci() {
  const cache = {};
  return function fibRecursive(n) {
    calculations++;
    if (n < 2) {
      return n;
    }
    if (n in cache) {
      return cache[n];
    }
    cache[n] = fibRecursive(n - 1) + fibRecursive(n - 2);
    return cache[n];
  };
}

const fib = memoizedFibonnaci();

// fibonacciIterative(10);
// fibonacciIterative2(10);
// fibonacciRecursive(10);
fib(10);

console.log(`${calculations} iterations/recursive function calls made.`);

// * Implement a function that reverses a string using iterationand then recursion
function reverseStringIterative(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

function reverseStringRecursive(str) {
  if (str.length === 0) return str;
  return reverseStringRecursive(str.substr(1)) + str.charAt(0);
}

reverseStringRecursive('yoyo mastery');
// should return: 'retsam oyoy'
