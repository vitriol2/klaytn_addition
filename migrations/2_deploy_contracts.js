// AdditionGameContract를 노드에 배포

const fs = require('fs') // 파일 시스템을 프로젝트에 저장할 것

const AdditionGame = artifacts.require('./AdditionGame.sol')

module.exports = function (deployer) {

    //Deployer가 컨트랙트를 deploy했을 때 넘겨주는 Json파일을 저장해서 
    //그 정보를 이용해 contract인스턴스를 생성하는데 유용하게 사용할 수 있다
    deployer.deploy(AdditionGame)
        .then(() => {
            if (AdditionGame._json) {
                //ABI를 파일에 저장
                fs.writeFile('deployedABI', JSON.stringify(AdditionGame._json.abi),(err) => {
                    if(err) throw err;
                    console.log('파일에 ABI 입력 성공')
                })
                
                //address 정보를 파일에 저장
                fs.writeFile('deployedAddress', AdditionGame.address, (err) => {
                    if(err) throw err;

                    console.log('파일에 주소 입력 성공')
                })
            }
        })
}
