import chalk from "chalk";

export const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

export const log = (label, msg) => {
  const color =
    label === "TIMER"
      ? chalk.blue
      : label === "IO"
      ? chalk.green
      : label === "IMMEDIATE"
      ? chalk.yellow
      : label === "MICROTASK"
      ? chalk.cyan
      : label === "NEXT_TICK"
      ? chalk.magenta
      : chalk.white;

  console.log(color(`[${label}] ${msg}`));
};
