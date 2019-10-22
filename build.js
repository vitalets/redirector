const {execSync} = require('child_process');
const fs = require('fs');

const HTML_FILE = 'index.html';

const content = execSync('babel index.js --presets=@babel/preset-env,minify');
const html = fs.readFileSync(HTML_FILE, 'utf8');
const newHtml = html.replace(/(<script>)[\s\S]*(<\/script>)/, `$1${content.toString()}$2`);
fs.writeFileSync(HTML_FILE, newHtml, 'utf8');
console.log(`${HTML_FILE} updated.`);
