var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var pronpt = function(texto){return lines.shift();};

let A = Number(prompt())

let B = Number(prompt())

console.log("SOMA = "+(A+B))
