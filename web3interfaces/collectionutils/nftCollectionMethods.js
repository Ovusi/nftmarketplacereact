const Contract = require('web3-eth-contract')
require("dotenv").config()
const abi = process.env.NFT_COLLECTION_ABI


class NftCollectionInterface {
    /**
     * @dev Connect to the blockachain and interact with 
     * an Nft collection's smart contract methods.
     * @param {string} provider Blockchain node provider.
     * @param {string} collectionAddress Nft collection address.
     * @returns {string} connected successfully
     */
    constructor(provider, collectionAddress) {
        try {
            Contract.setProvider(provider)
            this.nftcontract = new Contract(JSON.parse(abi), collectionAddress)
            console.log('Connected to the blockchain successfully.')
            return 'Connected to the blockchain successfully.'
        } catch (error) {
            console.log(error)
            return 'Error occured while connecting to the blockachain.'
        }
    }
}

module.exports = NftCollectionInterface