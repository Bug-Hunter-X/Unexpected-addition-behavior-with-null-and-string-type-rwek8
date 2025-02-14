# Unexpected Addition Behavior in JavaScript

This repository demonstrates an unexpected behavior in JavaScript when performing addition with null values and mixing number and string types. The function `foo` is designed to add two numbers. However, it exhibits unexpected behavior when one or both of the inputs are null or a string.

## Bug Description

The function `foo` unexpectedly concatenates the string '5' with the number 5 when given as inputs, resulting in '55' rather than 10.  It correctly handles null values by returning 0.

## Solution

The solution involves explicit type checking and coercion to ensure that only numbers are added. This prevents unintended string concatenation.

## How to reproduce
1. Clone this repository.
2. Navigate to the directory containing `bug.js`.
3. Run `node bug.js` in your terminal.  You'll see the unexpected output in the console.
4. Run `node bugSolution.js` to see the corrected output.