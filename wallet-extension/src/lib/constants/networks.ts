import { EVMNetwork } from '../networks';
import {
    ETH,
    MATIC,
} from './currencies';

export const MAINNET: EVMNetwork = {
    name: 'Mainnet',
    baseAsset: ETH,
    chainID: '1',
    family: 'EVM',
};

export const ROPSTEN: EVMNetwork = {
    name: 'Ropsten',
    baseAsset: ETH,
    chainID: '3',
    family: 'EVM',
};

export const POLYGON_MAINNET: EVMNetwork = {
    name: 'Polygon',
    baseAsset: MATIC,
    chainID: '137',
    family: 'EVM',
};

export const OPTIMISM_MAINNET: EVMNetwork = {
    name: 'Optimism',
    baseAsset: ETH,
    chainID: '10',
    family: 'EVM',
};
