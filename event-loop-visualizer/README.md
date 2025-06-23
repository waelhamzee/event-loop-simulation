# Event Loop Visualizer

This project helps visualize and understand the JavaScript event loop, which is a fundamental concept for asynchronous programming in JavaScript.

## What is the Event Loop?

The event loop is a mechanism that allows JavaScript to perform non-blocking operations, despite being single-threaded. It handles the execution of multiple pieces of code over time, such as callbacks, promises, and events.

### How it Works

1. **Call Stack**: Where functions are executed.
2. **Web APIs**: Browser APIs like `setTimeout`, `fetch`, etc.
3. **Callback Queue (Task Queue)**: Holds messages (callbacks) to be processed.
4. **Event Loop**: Continuously checks if the call stack is empty and pushes the next callback from the queue.