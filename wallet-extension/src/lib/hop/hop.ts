import {
    AlchemyProvider,
    TransactionResponse,
} from '@ethersproject/providers';
import {
    Hop,
    Chain,
} from '@hop-protocol/sdk';
import {
    BigNumber,
    Wallet,
    utils,
    providers,
} from 'ethers';

import { FungibleAsset } from '../assets';

/**
 * Send tokens between different layers using hop exchange
 * @param {AlchemyProvider} provider - AlchemyProvider instance
 * @param {FungibleAsset} asset - FungibleAsset instance
 * @param {Chain} fromNetwork - Network of the sender
 * @param {Chain} toNetwork - Chain of the receiver
 * @param {bigint} amount - Amount of Tokens to send
 * @returns {Promise<bigint>}  Transaction Response
 */
export const sendHop = async (
    asset: FungibleAsset,
    fromNetwork: Chain,
    toNetwork: Chain,
    amount: string,
    privateKey: string,
): Promise<TransactionResponse | string> => {
    const hop = new Hop('mainnet');

    // figure this out... is this the right way to do it?
    const newProvider = new providers.AlchemyProvider(fromNetwork.name.toLowerCase());

    const walletSigner = new Wallet(privateKey, newProvider);

    const bridge = hop.connect(walletSigner).bridge(asset.symbol.toUpperCase());

    const amountBN = utils.parseUnits(amount, asset.decimals);

    const hopTransaction = await bridge.send(amountBN, fromNetwork, toNetwork);

    return hopTransaction;
};

/**
 * Estimate bonderFee + destinationTxFee to send Tokens using hop exchange
 * @param {AlchemyProvider} provider - AlchemyProvider instance
 * @param {FungibleAsset} asset - FungibleAsset instance
 * @param {Chain} fromNetwork - Network of the sender
 * @param {Chain} toNetwork - Chain of the receiver
 * @param {bigint} amount - Amount of Tokens to send
 * @returns {Promise<bigint>} - Estimated fee
 */
export async function estimateBonderAndDestinationFee(
    provider: AlchemyProvider,
    asset: FungibleAsset,
    fromNetwork: Chain,
    toNetwork: Chain,
    amount: string | number,
): Promise<BigNumber | null> {
    const hop = new Hop('mainnet');

    const amountBN = utils.parseUnits(amount.toString(), asset.decimals);

    if (fromNetwork !== toNetwork && Number(amount) > 0) {
        const bridge = hop.connect(provider).bridge(asset.symbol);

        const totalBonderFee = await bridge.getTotalFee(
            amountBN, fromNetwork, toNetwork,
        );

        return totalBonderFee;
    }

    return null;
}

/**
 * Estimate Tokens at destination when transfering from one network to the Other
 * @param {AlchemyProvider} provider - AlchemyProvider instance
 * @param {FungibleAsset} asset - FungibleAsset instance
 * @param {Chain} fromNetwork - Network of the sender
 * @param {Chain} toNetwork - Chain of the receiver
 * @param {bigint} amount - Amount of Tokens to send
 * @returns {BigNumber} - estimated token at destination
 */
export async function estimateTokensAtDestination(
    provider: AlchemyProvider,
    asset: FungibleAsset,
    fromNetwork: Chain,
    toNetwork: Chain,
    amount: string,
): Promise<BigNumber | null> {
    const hop = new Hop('mainnet');

    if (fromNetwork !== toNetwork && Number(amount) > 0) {
        const bridge = hop.connect(provider).bridge(asset.symbol);

        const amountBN = utils.parseUnits(amount, asset.decimals);

        const amountOut = await bridge.getAmountOut(
            amountBN, fromNetwork, toNetwork,
        );

        return amountOut;
    }

    return null;
}

