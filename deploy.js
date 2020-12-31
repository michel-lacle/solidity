import HDWalletProvider from 'truffle-hdwallet-provider';
import Web3 from 'web3';
import { _interface, _bytecode } from './compile.js';
import * as dotenv from 'dotenv'

dotenv.config();

const provider = new HDWalletProvider(
    process.env.WALLET_MNEMONIC,
    process.env.PROVIDER_API_URL
);  

const web3 = new Web3(provider);

/*
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ gas: '1000000', from: accounts[0] });
*/

const deploy = async () => {

    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account: ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(_interface))
        .deploy({data: _bytecode, arguments: ['Hi, There!']})
        .send({gas: '1000000', from: accounts[0]});

    console.log('Contract deployed to ', result.options.address);
}

deploy();
