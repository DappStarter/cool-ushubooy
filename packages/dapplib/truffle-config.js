require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow foot fire reflect stereo evil hunt sister army gasp'; 
let testAccounts = [
"0x2fbe252cb665cb6d291bcc16827fbd501035efedc94756e6bb3073357d7524c5",
"0x5faf7301cc75a553498822d84d61e42e755629902d26a70a6de7d00ae9ed2781",
"0x6c5a696c95285f8660b7e08c1ddac56e8a34edbbb36a334ee5301e52ad585c75",
"0xd6c5d8ccc9e4a778784d3e362a07834ab713ae21776ccc54bcec8b2c70d0e380",
"0x291bb9eb05a6aad5fce1cd23b2a373e817b4487b0abf7b8c20880d4db472b89b",
"0x994caa49cbbf16d5bbd5ec8d3b2a89dc609ba4ac484bea90f36bb8b989ac9830",
"0x10fb80911bc22aef857447aba9a29317fcbb934ca296028fb13ffd37d1e11be0",
"0xc4c2762e39b4f7cebdb4cc6fcd8347cb5b37f23e1ca52d17a81981293ea6b773",
"0x5bfb818828616ecfdd85f4dd3ea3b4b2ce576380578f700d81362aeedd4bf003",
"0xe3a733889d8c9db6e4418af5370d8026ea681e2e4859048cd3f1cefffb877d3b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
