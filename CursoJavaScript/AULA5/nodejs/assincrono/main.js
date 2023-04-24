var fs = require('fs');

//Asynchronous - (abrir arquivo)
console.log('abrir aquivo');
fs.open('input.txt','r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }

    console.log('o arquivo abriu');
});