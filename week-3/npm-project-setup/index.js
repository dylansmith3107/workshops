import chalk from "chalk";

console.log(chalk.hex("#800080")("Hello World!"));

console.log(chalk.red.bold("Hello", chalk.blue.underline("World!")));
