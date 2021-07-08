require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name rifle pizza pupil hover another army genre'; 
let testAccounts = [
"0xa2123c045ab2ec15e685551ca27be69db04bd100aee546515229a6dfcd1089bb",
"0x43a6496eb8cc70903a7f9ca728c2284ef30f075af87f2cfeb5a24fcf05d7773c",
"0x00a8a7f0fed501828fd98fef52816f8a1c80e9048f0eb5b8261b3efc1cf9746d",
"0x25a49dc756a6f8f00390650f7baa094bf59d536cfca5a6211710cedf5d35f1a7",
"0xdbf41a6f75c3ee8d5de3e2688b78684b58cc603cefcd6feb6778234afb43286e",
"0x30b75a7b2a6272d069c1d844d8dac13837466041edce7848a0acc26c41e7f9c8",
"0xfe0662d6db971c6cb9c51515c1100d882dc6d241e380b4b565de2c7161610c2b",
"0xa0cc7f645deec5fae58944ba71300ae2dd28f4638e991e78343664ae9755faa3",
"0x5e97445020150b422360146311e6c29ceaddebd9442be18c977acc4c06aab650",
"0xf0bf66183a2816fb2f040ba0bd4fb6904f359a321ca3d16726c31429e9f34c3c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

