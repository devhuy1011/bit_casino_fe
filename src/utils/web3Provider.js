import Web3 from 'web3'

const getWeb3 = async () => {
  // console.log('window ==>:', window)
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum)
    try {
      // console.log('run')
      await window.ethereum.enable()
      window.ethereum.autoRefreshOnNetworkChange = false
      return web3
    } catch (error) {
      console.error(error)
    }
  } else {
    const provider = new Web3.providers.HttpProvider(process.env.REACT_APP_NODE_1)
    const web3 = new Web3(provider)
    // eslint-disable-next-line no-console
    console.log('No web3 instance injected, using Local web3.')
    return web3
  }
  // else if (window.web3) {
  //   // Use Mist/MetaMask's provider.
  //   const web3 = window.web3
  //   console.log('Injected web3 detected.', window.web3)
  //   return web3
  // }
}

export default getWeb3
