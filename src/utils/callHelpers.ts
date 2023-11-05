import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'

import getWeb3 from './web3Provider.js'

export const approveVault = async (lpContract, vault, account) => {
  return lpContract.methods.approve(vault.options.address, ethers.constants.MaxUint256).send({ from: account })
}

export const approve = async (lpContract, spenderAddress, account) => {
  return lpContract.methods.approve(spenderAddress, ethers.constants.MaxUint256).send({ from: account })
}

export const approveTicket = async (lpContract, spenderAddress, account) => {
  // console.log('lpContract', lpContract, spenderAddress, account)
  return lpContract.methods.setApprovalForAll(spenderAddress, true).send({ from: account, gas: 3000000 })
}

export const stake = async (contract, amount, account, packageId) => {
  const amounts = new BigNumber(amount).times(new BigNumber(10).pow(18))
  // console.log(`contract`, contract, amounts, account, packageId)
  // const gasLimit = 500000
  return contract.methods.deposit(amounts.toString(), packageId).send({ from: account })
  // .on('transactionHash', (tx) => {
  //   return tx.transactionHash
  // })
}

export const stakeTicket = async (contract, type, account, tokenId) => {
  const gas = 3000000
  // eslint-disable-next-line no-console
  console.log('contract', contract, type, account, tokenId)
  return contract.methods.stake(type, tokenId).send({ from: account, gas })
  // .on('transactionHash', (tx) => {
  //   return tx.transactionHash
  // })
}

export const claimTicket = async (contract, type, account, tokenId) => {
  // console.log(`contract`, contract,type,account, tokenId)

  const gas = 3000000
  return contract.methods.claim(type, tokenId).send({ from: account, gas })
}

export const withdrawalTicket = async (contract, type, account, tokenId) => {
  // console.log(`contract`, contract,type,account, tokenId)
  const gas = 3000000
  return contract.methods.withdrawal(type, tokenId).send({ from: account, gas })
}

export const buyTicket = async (contract, amount, account, numberTicket, type) => {
  const amounts = new BigNumber(amount).times(new BigNumber(10).pow(18))
  const gas = 500000 * Number(numberTicket)
  // console.log('contract', contract, amount, account,numberTicket, type);
  return contract.methods.buyTicket(type, numberTicket).send({ from: account, value: amounts.toString(), gas })
  // .on('transactionHash', (tx) => {
  //   return tx.transactionHash
  // })
}

export const getClaim = async (contract, account) => {
  // console.log(`vaultContract`, vaultContract)
  return contract.methods
    .claim()
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

/** Get staking info
 *  @param {string} abiSmartContract // token address
 *  @param {string} smartContractAdress // token address
 *  @param {string} account // user address
 */
export async function getStackingInfo(abiSmartContract, smartContractAdress, account) {
  try {
    const web3: any = await getWeb3()
    const tokenInst = new web3.eth.Contract(abiSmartContract, smartContractAdress)
    const res = await tokenInst.methods.stakingInfoOf(account).call()
    return res
  } catch (err) {
    return null
  }
}

/** Get caculator clam
 *  @param {string} abiSmartContract // token address
 *  @param {string} smartContractAdress // token address
 */
export async function getCalculatorCalaim(abiSmartContract, smartContractAdress) {
  try {
    const web3: any = await getWeb3()
    const tokenInst = new web3.eth.Contract(abiSmartContract, smartContractAdress)
    const res = await tokenInst.methods.calculatorClaim().call()
    return res
  } catch (err) {
    return null
  }
}

/** Withdraw staking
 *  @param {string} abiSmartContract // token address
 *  @param {string} smartContractAdress // token address
 *  @param {string} account // account address
 */
export async function withdrawStaking(abiSmartContract, smartContractAdress, account) {
  try {
    const web3: any = await getWeb3()
    const tokenInst = new web3.eth.Contract(abiSmartContract, smartContractAdress)
    const res = await tokenInst.methods
      .withdraw()
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })

    // eslint-disable-next-line no-console
    console.log('withdrawStaking ==>', res)

    return res
  } catch (err) {
    return null
  }
}
