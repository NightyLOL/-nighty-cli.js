const tags = require("../c-tags/tag.js");

module.exports = (args, errFunction) => {
  try {
    if (args[2] === "-cfile") {
      require("./cmds/cfile.js")(args);
    }
  } catch (err) {
    errFunction({
      fullObject: err,
      type: err.name,
      cause: err.message,
      failedAt: "try catch block... more info below...",
      extrInfo: "logging out \x1b[35merr.stack\x1b[0m in 3s",
    });

    setTimeout(() => {
      // Didn't use console.trace because it did weird stuff.
      console.log("\n\x1b[36m" + err.stack + "\x1b[0m");
    }, 3000);
  }
}