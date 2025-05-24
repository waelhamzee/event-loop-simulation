import { log, sleep } from "./utils.js";

export async function simulateEventLoopPhases() {
  log("MAIN", "Starting simulation");

  setTimeout(() => {
    log("TIMER", "setTimeout executed");
  }, 0);

  setImmediate(() => {
    log("IMMEDIATE", "setImmediate executed");
  });

  process.nextTick(() => {
    log("NEXT_TICK", "process.nextTick executed");
  });

  Promise.resolve().then(() => {
    log("MICROTASK", "Promise microtask executed");
  });

  fsRead();

  await sleep(100);

  log("MAIN", "Main function end");
}

function fsRead() {
  import("fs").then((fs) => {
    fs.readFile("./phases.js", () => {
      log("IO", "fs.readFile callback executed");
    });
  });
}
