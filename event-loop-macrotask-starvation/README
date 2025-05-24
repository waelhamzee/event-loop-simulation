# Macrotask Starvation

This project demonstrates the concept of **macrotask starvation** in JavaScript's event loop.

## What is Macrotask Starvation?

Macrotask starvation occurs when continuous scheduling of microtasks (such as Promises) prevents macrotasks (like `setTimeout`, `setInterval`, or I/O events) from executing in a timely manner. This can lead to delayed UI updates, timers, or other asynchronous operations.

## How It Works

- JavaScript's event loop processes all microtasks in the queue before moving on to the next macrotask.
- If microtasks are scheduled recursively or in large numbers, they can block the event loop from processing macrotasks.