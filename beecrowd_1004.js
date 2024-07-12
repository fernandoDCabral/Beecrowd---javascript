var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};

let A = Number(prompt());

let B = Number(prompt());

console.log("PROD = "+(A*B))
