const path = require('path');
const fs = require('fs');
const solc = require('solc');

const dirname = path.resolve();
const inboxPath = path.resolve(dirname, 'contracts', 'Inbox.sol');
console.log(inboxPath);
const source = fs.readFileSync(inboxPath, 'utf8');

console.log(source);

const bytecode = solc.compile(source, 1);

console.log(bytecode);

