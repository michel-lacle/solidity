import path from 'path';
import fs from 'fs';
import solc from 'solc';

const dirname = path.resolve();
const inboxPath = path.resolve(dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

var inbox_contract = solc.compile(source, 1).contracts[':Inbox'];

// console.log(inbox_contract);

export let _interface = inbox_contract.interface;
export let _bytecode = inbox_contract.bytecode