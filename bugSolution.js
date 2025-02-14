function foo(a, b) {
  //Explicit type checking and conversion to numbers
  a = Number(a);
  b = Number(b);
  
  if (isNaN(a) || isNaN(b)) {
    return 0; // Handle NaN (Not a Number)
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(5, '5')); // Output: 10