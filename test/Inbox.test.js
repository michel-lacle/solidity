import assert from 'assert';
import ganache from 'ganache-cli';
import Web3 from 'web3';

const provider = ganache.provider();
const web3 = new Web3(provider);
import { _interface, _bytecode } from '../compile.js'

let accounts = null;
let inbox;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    console.log(accounts);

    inbox = await new web3.eth.Contract(JSON.parse(_interface))
        .deploy({ data: _bytecode, arguments: ['Hi There!']})
        .send({ from: accounts[0], gas: '1000000'});

    inbox.setProvider(provider);
});

describe('Inbox', () => {
    it('deploys a contract', () =>{
        //console.log(inbox);
        assert.ok(inbox.options.address);
    });

    it('has a default message', async () => {
        const message = await inbox.methods.message().call()

        assert.strictEqual(message, 'Hi There!')
    });
});