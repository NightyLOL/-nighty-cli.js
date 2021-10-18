#!/usr/bin/env node

const tags = require("./c-tags/tag.js");

if (process.argv[2]) {
  require("./cli/cli.js")(process.argv, (err) => {
    if (err) {
      console.log(tags.error, "\x1b[35mtype: " + err.type + "\x1b[0m");
      console.log(tags.error, "\x1b[35mcause: " + err.cause + "\x1b[0m");
      console.log(tags.error, "failed-at: " + err.failedAt);
      if (err.extrInfo) {
        console.log(tags.error, "extra: " + err.extrInfo);
      }
    }
  });
  
  return;
}