---
marp: true
---

# FUNdamentals
## Timing and Delay

---

## Timing and Delay

In JavaScript, there are ways to set up timers and delays. 

A timer in JS is used to execute a callback function every X milliseconds.

A delay in JS is used to execute a callback after X milliseconds have passed.

---

## `setInterval()`

To setup a timer in JS, we use `setInterval()`: 
- `setInterval()` is function that creates a loop.
- This loop runs every time X amount of time passes.
- It takes 2 parameters:
    1. A callback function (named or anonymous).
    2. Amount of time to wait (in **milliseconds**).

---

## `setInterval()`


```js
setInterval(() => {
    console.log("I will run once every second!");
}, 1000)
```

---

## `setInterval()`

- The `setInterval()` loop runs forever unless it is manually cleared.
- To delete a `setInterval()`, we use `clearInterval()`.
    - To use `clearInterval()`, we need to store the `setInterval()` inside a variable.
- More often than not, we'll have to clear the interval from within itself.

```js
let seconds = 0;

const timer = setInterval(() => {
    seconds++;

    console.log(`${seconds} seconds have passed`);

    if(seconds === 10) {
        clearInterval(timer);
    }
}, 1000)
```

---

## `setTimeout()`

To setup a delay in JS, we use `setTimeout()`: 
- `setTimeout()` is function that waits before executing it's code.
- This function runs once after X amount of time has passed.
- It takes 2 parameters:
    1. A callback function (named or anonymous).
    2. Amount of time to wait (in **milliseconds**).
- `setTimeout()` deletes itself once it has run.

---

## `setTimeout()`

```js
setTimeout(() => {
    console.log("I waited three seconds, now I disappear!");
}, 3000)
```

---

## `setTimeout()`

- The `setTimeout()` delay will happen no matter what unless it is manually cleared.
- To delete a `setTimeout()`, we use `clearTimeout()`.
    - To use `clearTimeout()`, we need to store the `setTimeout()` inside a variable.
- This is not very common, but can be useful in specific cases.
    - Example: Log out a user that has been inactive on your website for a while.

```js
// logs the user out if no activity for 10 minutes
const delay = setTimeout(() => {
    console.log("Your session has expired!");
}, 600000)

// event handler that detects user activity
const handleActivity = () => {
    clearTimeout(delay);
}
```