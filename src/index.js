// klaytn 불록체인과 소통할 수 있는 caver.js라이브러리를 불러오고 
// bApp 안에서 사용할 수 있도록 인스턴스 생성

import Caver from 'caver-js';

const config = {
  rpcURL: 'https://api.baobab.klaytn.net:8651' // 어떤 클레이튼 노드에 연결할 지 정의
}
// rpcURL을 caver 생성자 안에 삽입
const cav = new Caver(config.rpcURL);

const App = {
  auth: {
    accessType: 'keystore',
    keystore: '',
    password: ''
  },

  start: async function () {
    
  },

  handleImport: async function () {
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0])
    fileReader.onload = (event) => {
      try {
        //사용자가 입력한 keystore파일이 유효하지 않으면 메세지와 함께 함수 종료
        if(!this.checkValidKeystore(event.target.result)) {
          $('#message').text('유효하지 않은 keystore 파일입니다.');
          return;
        }
        // keystore 파일이 유효하면 전역변수에 key 저장
        this.auth.keystore = event.target.result;
        $('#message').text('keystore 통과, 비밀번호를 입력하세요');
        document.querySelector('#input-password').focus();

      }catch (event) {
        $('#message').text('유효하지 않은 keystore 파일입니다.');
        return;
        
      }
    }
  },

  handlePassword: async function () {
    //입력된 password를 전역변수 auth의 password에 대입
    this.auth.password = event.target.value;
  },

  handleLogin: async function () {

  },

  handleLogout: async function () {

  },

  generateNumbers: async function () {

  },

  submitAnswer: async function () {

  },

  deposit: async function () {

  },

  callOwner: async function () {

  },

  callContractBalance: async function () {

  },

  getWallet: function () {

  },

  
  checkValidKeystore: function (keystore) {
    //Json 안의 속성들을 변수로 활용하기위해 Object로 변경
    const parsedKeystore = JSON.parse(keystore);
    //keystore의 주요 속성들이 유효한지 확인
    const isValidKeystore = parsedKeystore.version &&
    parsedKeystore.id &&
    parsedKeystore.address &&
    parsedKeystore.keyring;

    return isValidKeystore;

  },

  integrateWallet: function (privateKey) {

  },

  reset: function () {

  },

  changeUI: async function (walletInstance) {

  },

  removeWallet: function () {

  },

  showTimer: function () {

  },

  showSpinner: function () {

  },

  receiveKlay: function () {

  }
};

window.App = App;

window.addEventListener("load", function () {
  App.start();
});

var opts = {
  lines: 10, // The number of lines to draw
  length: 30, // The length of each line
  width: 17, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  color: '#5bc0de', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  className: 'spinner', // The CSS class to assign to the spinner
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  position: 'absolute' // Element positioning
};