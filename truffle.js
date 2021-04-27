// truffle.js config for klaytn.
// 컨트랙트 재배포: 'truffle deploy --compile-all --reset --network klaytn'

// 배포를 할 때 어느 네트워크에 할 지 정하기
const PrivatekeyConnector = require('connect-privkey-to-provider')
// const HDWalletProvider = require('truffle-hdwallet-provider-klaytn')
const NETWORK_ID = '1001' // 바오밥 고유의 network id
const GASLIMIT = '20000000' // 배포하는데 들어가는 gas 한도
const url = 'https://api.baobab.klaytn.net:8651' // klaytn 플러드가 돌아가고 있는 주소: baobab test net
const PRIVATE_KEY = '0x783f1b34db487b8c59f43c7d9495d630de66e63a7f5f0e7311c16a322ec1ab06'

module.exports = {
    networks: {
        klaytn: {
            /**
             * 4가지의 옵션
             * 1) provider: klaytn node를 제공하는 공급자
             * 2) network_id
             * 3) gas limit
             * 4) gasprice: baobab에서 정해줌 => null
             */
            provider: new PrivatekeyConnector(PRIVATE_KEY, url),
            // provider: new HDWalletProvider(PRIVATE_KEY, url),
            network_id: NETWORK_ID,
            gas: GASLIMIT,
            gasPrice: null
        }
    },
}