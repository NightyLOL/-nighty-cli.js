const fs = require("fs-extra");
const readlineSync = require("readline-sync");

module.exports = (args) => {
  let file = args[3];
  
  if (!file) file = readlineSync.question("file: ");

  fs.writeFileSync(file, "");
}