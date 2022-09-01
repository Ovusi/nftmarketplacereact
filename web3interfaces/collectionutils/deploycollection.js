const { Web3 } = require('web3');

require("dotenv").config()

class DeployCollection {
    /**
     * @dev Connect to the blockchain and deploy a new
     * nft collection to the blockchain.
     * @param {string} account hexadecimal adress hash
     * @param {string} provider_ Current blockchain provider
     * @param {string} name Name of NFT collection
     * @param {string} symbol Collection symbol
     * @returns {string} Success or error message
     */
    constructor(account, provider_, name, symbol) {
        try {
            const web3 = new Web3(provider_);
            this.deploy_contract = new web3.eth.Contract(JSON.parse(process.env.NFT_COLLECTION_ABI));

            this.payload = {
                data: process.env.BYTE_CODE,
                arguments: [name, symbol]
            };

            this.parameter = {
                from: account,
                gas: 1500000,
                gasPrice: '30000000000000'
            };

            console.log('Connected to the Blockchain successfully.')
            return 'Connected to the Blockchain successfully.'

        } catch (error) {
            console.log(error)
            return 'An error occured.'
        }
    }

    /**
     * @dev Call to deploy collection to the blockchain.
     * @returns {Promise<string>} New contract address.
     */
    deploy_collection = async () => {
        await this.deploy_contract.deploy(this.payload).send(this.parameter, (err, transactionHash) => {
            return { 'Transaction Hash': transactionHash };
        }).on('confirmation', () => { }).then((newContractInstance) => {
            return { 'Deployed Contract Address': newContractInstance.options.address };
        });

        return newContractInstance.options.address;
    };
}

module.exports = { DeployCollection }
