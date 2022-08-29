const Web3 = require('web3');
const Contract = require('web3-eth-contract')
require("dotenv").config()
const abi = process.env.ABI
const marketContractAddress = process.env.MARKET_PLACE_ADDRESS


// When users connect thier wallets, the provider is parsed
// as an argument to the HavenXMarketplace class.
// This allows users to interact with the marketplace contract.


class HavenXMarketplace {
    /**
     * @dev Connect to the blockachain and interact with 
     * the marketplace smart contract methods.
     * 
     * @param {string} provider Blockchain node provider.
     * @returns {string} connected successfully
     */
    constructor(provider) {
        try {
            Contract.setProvider(provider)
            this.marketcontract = new Contract(JSON.parse(abi), marketContractAddress)
            console.log('Connected to the blockchain successfully.')
            return 'Connected to the blockchain successfully.'
        } catch (error) {
            console.log(error)
            return 'Error occured while connecting to the blockachain.'
        }
    }

    /**
     * @dev This function lists an NFT on the marketplace
     * 
     * @param {String} nftCollectionContract 
     * @param {Number} tokenid 
     * @param {Number} amount 
     * 
     * @returns {Number} new item id
     */
    listNft = async (nftCollectionContract, tokenid, amount) => {

        return await this.marketcontract.methods.listNft(nftCollectionContract, tokenid, amount).send()
            .then((data) => { return data; })
            .catch((err) => { return err; });
    };

    /**
     * @dev Buy an nft listing on the marketplace.
     * 
     * @param {Number} listingid 
     * @param {string} currencycontract 
     * @param {number} amount 
     * @returns {true} true
     */
    buyListing = async (listingid, currencycontract, amount) => {

        return await this.marketcontract.methods.buyNft(listingid, currencycontract, amount).send()
            .then((data) => { return data; })
            .catch((err) => { return err; });
    };

    /**
     * @dev auction an item on the marketplace
     * 
     * @param {string} collectioncontract 
     * @param {number} tokenId 
     * @param {number} endtime Unix time format 
     * @param {number} amount 
     * @returns {number} new item id
     */
    auctionNft = async (collectioncontract, tokenId, endtime, amount) => {

        return await this.marketcontract.methods.placeAuction(collectioncontract, tokenId, endtime, amount).send()
            .then((data) => { return data; })
            .catch((err) => { return err; });
    };

    /**
     * @dev Bid on an auctioned item.
     * 
     * @param {number} auctionId 
     * @param {number} amount 
     * @returns {true}
     */
    bidAuctionedNft = async (auctionId, amount) => {

        return await this.marketcontract.methods.bid(auctionId, amount).send()
            .then((data) => { return data; })
            .catch((err) => { return err; });
    };

    cancelDirectListing = async () => {

        return await this.marketcontract.methods.cancelListing().send()
            .then((data) => { return data; })
            .catch((err) => { return err; });
    };

    cancelAuctionedItem = async () => {

        return await this.marketcontract.methods.cancelAuction().send()
            .then((data) => { return data; })
            .catch((err) => { return err; });
    };

    createNewUser = async () => {

        return await this.marketcontract.methods.createUser().send()
            .then((data) => { return data; })
            .catch((err) => { return err; });
    };

    withdrawBid = async () => {

        return await this.marketcontract.methods.withdrawUnderBid().send()
            .then((data) => { return data; })
            .catch((err) => { return err; });
    };

    claimHighestBid = async () => {

        return await this.marketcontract.methods.withdrawHighestBid().send()
            .then((data) => { return data; })
            .catch((err) => { return err; });
    };

    claimWonNft = async () => {

        return await this.marketcontract.methods.claimNft().send()
            .then((data) => { return data; })
            .catch((err) => { return err; });
    };

    getAllMarketAuctions = async () => {

        return await this.marketcontract.methods.getAllAuctions().call()
            .then((data) => { return data; })
            .catch((err) => { return err; });
    };

    getAllMarketListings = async () => {

        return await this.marketcontract.methods.getAllListings().call()
            .then((data) => { return data; })
            .catch((err) => { return err; });
    };

    getTokenUriById = async () => {

        return await this.marketcontract.methods.getTokenUri().call()
            .then((data) => { return data; })
            .catch((err) => { return err; });
    };

    getListingById_ = async () => {

        return await this.marketcontract.methods.getListingById().call()
            .then((data) => { return data; })
            .catch((err) => { return err; });
    };

    isUserVerified = async () => {

        return await this.marketcontract.methods.isVerified().call()
            .then((data) => { return data; })
            .catch((err) => { return err; });
    };

}

module.exports = { HavenXMarketplace }