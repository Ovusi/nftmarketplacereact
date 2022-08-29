const Web3 = require('web3');
const Contract = require('web3-eth-contract')
require("dotenv").config()
const abi = process.env.ABI
const marketContractAddress = process.env.MARKET_PLACE_ADDRESS


// When users connect thier wallets, the provider is parsed
// as an argument to the HavenXMarketplace class.
// This allows users to interact with the marketplace contract.


class HavenXMarketplace {
    constructor(provider) {
        try {
            Contract.setProvider(provider)
            this.marketcontract = new Contract(JSON.parse(abi), marketContractAddress)
            console.log(this.marketcontract)
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

    buyListing = async (listingid, currencycontract, amount) => {
        
        return await this.marketcontract.methods.buyNft(listingid, currencycontract, amount).send()
            .then((data) => { return data; })
            .catch((err) => { return err; });
    };

    auctionNft = async () => {
       
        return await this.marketcontract.methods.placeAuction().send()
            .then((data) => { return data; })
            .catch((err) => { return err; });
    };

    bidAuctionedNft = async () => {
        
        return await this.marketcontract.methods.bid().send()
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