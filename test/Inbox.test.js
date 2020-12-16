import assert from 'assert';
import ganache from 'ganache-cli';
import Web3 from 'web3';

const web3 = new Web3(ganache.provider());

beforeEach(() => {

    web3.eth.getAccounts()
        .then(fetchedAccounts => {
            console.log(fetchedAccounts);
        });
});

describe('Inbox', () => {
    it('deploys a contract', () =>{
        
    });
});