Recursive functions are functions that call themselves. A recursive function must have a terminating statement so that the function does not call itself infinitely.

Write the factorial function with the same input and output, but use recursion to write it. You are not allowed to use any loops.

Here is an example Recursive function:

```js
function r(i) {
  if (i === 0) {
    return 1;
  }
  
  return r(i-1) + 1;
}
```
