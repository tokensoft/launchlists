# Tokensoft Launchlists
A JSON Schema, called Launch List, a unified way for web3 projects to decentralize contextual information and metadata about 
their smart contract-based token sales or auctions.

## Why?

The Launch list is a specification for lists of metadata pertaining to token sales and auctions. This repo
is inspired by the [Uniswap Token Lists](https://github.com/Uniswap/token-lists) and the [Trust Wallet Asset Library](https://github.com/trustwallet/assets/tree/master/blockchains)
and is designed to enable a direct connection between token projects and web3 interfaces. Any addition to the Launch List has to follow the schema specification outlined in this doc.  

## Start here
To set up a new sale, follow these steps:
1. Create a new sale using https://app.tokensoft.io and retrieve the `saleId` value or retreive a unique identifier that is compatible with your platform of your choice.
2. Submit a pull request to https://github.com/tokensoft/launchlists/compare to this repository with updated sale configuration including your sale.
3. The sale will be accessible users once the pull request is approved by the maintainers of this repo.
4. To update this configuration once the sale is visible, create another pull request.

## Setup
On Github:
* Sign in to github
* Fork this repository

On your machine:
* Install git: https://github.com/git-guides/install-git
* Install npm: https://nodejs.org/en/
* Clone the forked repository: `git clone https://github.com/[your github username here]/launchlists.git`
* Enter the repository: `cd launchlists`
* Check out a new branch: `git checkout -b the-name-of-my-sale`
* Install dependencies: `npm install`

## Launching a Sale

### Production
On your machine:
* Refer to `./sale.example.json` for example sale configuration
* Add a new sale object to the array of sales in `./prod/sales_index.json`
* Verify that the schema is correct: `npm run test` (this will throw an error if config does not match the schema in `./sale.schema.json`)
* Commit changes: `git commit -am 'new sale'`
* Git push: `git push origin <the-name-of-my-sale>`

On github:
* Submit a pull request from your forked repository to https://github.com/tokensoft/launchlists

Once complete the sale will be visible on https://app.tokensoft.io or other platforms supporting Launchlists

### Staging
You can try out the Tokensoft platform using the same steps as the production flow below, except:
* Instead of editing, `./prod/sales_index.json`, add your sale config to the array of sales in `./staging/sales_index.json`
  * Set chain ID to `3` for ropsten
* View sales at https://app.stagetokensoft.com or other platforms supporting Launchlists
* The network is Ropsten: this is not suitable for real sales!

## Sale Configuration
Use this repository to configure the following sale properties. Note that all ethereum addresses should be in lowercase.

### Chain ID
`chainId`: the Ethereum Chain ID where the sale will occur
* For production: only Ethereum mainnet (chain ID `1`) is supported
* For staging: Ropsten (`3`)

### Sale Address
`saleManagerAddress`: the address of the sale management smart contract. Tokensoft will provide this value.

### Sale ID
`saleId`: the `bytes32` identifier uniquely identifying this sale, provided during the sale creation process at https://app.tokensoft.io in the `SaleManager.newSale()` function on-chain. You can find this value under the Manage Sale > Basic Configuration section on https://app.tokensoft.io

### Sale Name
* `saleName`: the name of the sale that will be displayed in app.tokensoft.io

### Hidden
* `hidden`: boolean to determine the sale should be hidden from view

### Logo
* `logo`: a URI to a .png logo that will be displayed in app.tokensoft.io

### Favicon
* `favicon`: a URI to a .ico logo for browser tabs

### Project Website
* `projectWebsite`: a URI to the project behind the sale

### Socials
* List links to accounts on common social platforms 

### Documents
Provide an array of documents that must be reviewed by sale participants. Each document includes these fields:
* `name`: the name of the document that will be visible to sale participants, e.g. "Purchase Agreement"
* `uri`: a link to a `.pdf` document
* `appendSignaturePageUri` (optional): a link to a one-page `.pdf` template countersigned by your project. 
If provided, the same manager should fill in this template with sale participant information and digital signatures. 
The sale manager should help generate this document.

### Access
When a new sale is created, it can either be public (100% globally accessible) or private (restricted to specific users). 
If private, the sale manager will work with you to generate a list of users that meet the compliance requirements provided by your counsel. Use these two fields to restrict access to specific types of user for pivate sales.

* `limitToRegions` (optional): provide a list of ISO Alpha-2 country codes for regions where the sale should be accessible. If this field is provided, users that submit an address in any region not on this list will not be able to participate in the sale. Note that Tokensoft has additional compliance requirements: listing a country here does not imply that Tokensoft can support sale participants in that country.
* `merkleProofs` (optional): The sale manager will add this value to reference the merkle proofs allowing users to access a private sale

Access restrictions are additive: to access a private sale, the sale manager may place various restrictions on access. These may include ownership of an NFT, completion of KYC or similar.

