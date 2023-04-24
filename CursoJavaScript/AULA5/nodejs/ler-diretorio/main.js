var fs = require("fs");

console.log("Going to read directory /a");
fs.readdir("./a", function (err, files) {
  if (err) {
    return console.error(err);
  }
  files.forEach(function (file) {
    console.log(file);
  });
});