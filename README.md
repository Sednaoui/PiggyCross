# PiggyCross (🐷,🐷)

![image](https://www.seekpng.com/png/detail/56-568740_hamm-1-hamm-toy-story-png.png)

A web3 crypto wallet with build-in bridge support, built as a [browser extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension).

We are building an ethereum wallet that can enable bridging of assets seamlessly, as opposed to manually moving funds from one network to the other. That allows users to interact with any contract on any network, no matter where their funds are. 

## We want to end: 

- The switching between different RPC endpoints manually
- The bridging of asset between different networks manually

## Roadmap: 

Our focus is the user experience on interoperability

Goals:
- ### Extension to DAAP connection
    - Build an architecture to expose window.ethereum into the extension so to receive and send [JSON RPC](https://ethereum.org/en/developers/docs/apis/json-rpc/) methods from other clients. DAAPs sends request using ethereum.window object on the browser —> Extension receive requests, verify it and sends back response to daaps

- ### Support for a second ethereum layer 2 network
    - Layer 2 advantages are lower fees and faster transactions. Our wallet will need to support different ethereum networks. That means all functions needs to be working properly at least a second Layer network. That includes transacting with daaps, sending tokens, view assets, etc..
- ### Integrate a bridge to use in transactions
    -This is where our wallet stands out, by having a bridge in the backend to move funds between different Layer 2 networks and Ethereum mainnet


## This repo links to three main codebases:

- create-react-extension: the base repo that was used to create the react broswer extension
- wallet-extension: the main code where the browser exenstion wallet is being built
- zapper-daap-demo: a repo that links to a zapper daap to test the wallet's cross-network features
