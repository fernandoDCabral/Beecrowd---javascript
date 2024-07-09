var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function (texto) { return lines.shift(); };

let raio = parseFloat(prompt());

let area = 3.14159 * (raio ** 2);

console.log(("A=" + area.toFixed(4)));