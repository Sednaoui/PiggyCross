import log from 'loglevel';

interface Params { }

// eslint-disable-next-line camelcase
export default function eth_accounts(_params: Params): void {
    log.error('wallet: "eth_accounts" method is not implemented');
}
