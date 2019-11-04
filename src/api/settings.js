import Web3 from 'web3';

export const connectMetamask = async () => {
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