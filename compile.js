const path = require('path');
const fs = require('fs');
const solc = require('solc');

const dirname = path.resolve();
const inboxPath = path.resolve(dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Inbox']