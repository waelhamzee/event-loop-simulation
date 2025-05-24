import { log } from "./utils.js";

setTimeout(() => {
  log("MACROTASK", "setTimeout callback ran (should be delayed if starved)");
  // process.exit(0);
}, 0);

let count = 0;

function startStarvation() {
  Promise.resolve().then(() => {
    log("MICROTASK", `Microtask #${++count}`);
    startStarvation();
    // setTimeout(startStarvation, 0);
  });
}

log("MAIN", "Starting microtask starvation loop");
startStarvation();
