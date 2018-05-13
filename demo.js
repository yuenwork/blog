var fs = require('fs');
var dir = './'+process.argv[2];

fs.mkdirSync(dir);
process.chdir(dir);
fs.mkdirSync('css');
fs.mkdirSync('js');
fs.writeFileSync("./index.html","<!DOCTYPE>\n<tittle>Hello</tittle>\n<h1>Hi<h1>");
fs.writeFileSync("./css/style.css","h1{color: red;}");
fs.writeFileSync("./js/main.js","var string = \"Hello World\"\nalert(string)");
process.exit(0);