import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { getAccountAPI } from 'redux/reducers/account'
import { getDemoAPI } from 'redux/reducers/demo'
import { settingAPI } from 'api'
import Web3 from 'web3';
import Loader from 'react-loader-spinner'
const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

class Demo extends React.Component {

  constructor(props) {
    super(props)
    this.state = { account: '' }
    this.intervalAccount = null;
  }

  toNumber = (val) =>{
    // div 10^18
    return val/0xDE0B6B3A7640000;
  }

  async componentDidMount() {
    // this.intervalAccount = setInterval(() => {
    //   this.props.getAccountAPI()
    // }, 1000);
    await settingAPI.connectMetamask();
    await this.props.getAccountAPI()
    web3.eth.getBalance('0x1697F76C38aB1D02c55db612d990311974bfBDB4')
      .then(res =>
        console.log(this.toNumber(res))
      )
    // this.props.getDemoAPI('LTC_BTC', 'Day');
    web3.eth.sendTransaction()
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalAccount);
  }


  componentDidUpdate(prevProps, prevState) {
    window.ethereum.on('accountsChanged', () => {
      this.props.getAccountAPI()
    })
  }

  async loadWeb3() {
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
      }
      else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
      }
      else {
        window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
      }
    } catch (error) {
      // Handle error. Likely the user rejected the login:
      console.log("User rejected provider access")
    }
  }

  render() {
    const { demo, account } = this.props;
    // console.log(account)
    return (
      <div className='demo'>
        <p>Your account: {account[0]}</p>
        <Button color="primary">12345</Button>
        {demo && demo.data.length > 0 ?
          demo.data.map((v, k) => {
            return (
              <p key={k} className='demo__text'>{v.market}</p>)
          })
          : <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
          />}
        DemoPage1234</div>
    );
  }
}

const mapDispatchToProps = {
  getAccountAPI,
  getDemoAPI
}
const mapStateToProps = (state) => ({
  demo: state.demo,
  account: state.account.data
})


export default connect(mapStateToProps, mapDispatchToProps)(Demo)