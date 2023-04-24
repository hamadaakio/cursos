var fs = require("fs");
console.log("deletar arquivo");
fs.unlink("input.txt", function (err) {
  if (err) {
    return console.err(err);
  }
  console.log("arquivo deletado com sucesso");
});
