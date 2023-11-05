import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { BscConnector } from '@binance-chain/bsc-connector'
import Web3 from 'web3'
import getNodeUrl from './getRpcUrl'
import { ConnectorNames } from './connectorNames'

// const POLLING_INTERVAL = 12000
const rpcUrl = getNodeUrl()
// const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)
const chainId = parseInt(process.env.REACT_APP_CHAIN_ID) || 56
// console.log('chainid ::: ', chainId)

const injected = new InjectedConnector({ supportedChainIds: [chainId] })

const walletconnect = new WalletConnectConnector({
  rpc: { [chainId]: rpcUrl },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
})

const bscConnector = new BscConnector({ supportedChainIds: [chainId] })
const klaytnConnector = new InjectedConnector({ supportedChainIds: [chainId] })

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.BSC]: bscConnector,
  [ConnectorNames.KLIP]: klaytnConnector,
}

export const getLibrary = (provider): Web3 => {
  return provider
}
