# build-output-script

> Builds a P2PKH Bitcoin transaction output script

[![Build Status](https://travis-ci.com/lukechilds/build-output-script.svg?branch=master)](https://travis-ci.com/lukechilds/build-output-script)
[![Coverage Status](https://coveralls.io/repos/github/lukechilds/build-output-script/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/build-output-script?branch=master)
[![npm](https://img.shields.io/npm/v/build-output-script.svg)](https://www.npmjs.com/package/build-output-script)

Builds a P2PKH Bitcoin transaction output script from an array of P2PKH addresses and amounts. Will also work with any Bitcoin derived cryptocurrencies with a single byte pubkey hash prefix.

## Install

```shell
npm install build-output-script
```

## Usage

Send 1 BTC to `1LukeQU5jwebXbMLDVydeH4vFSobRV9rkj`

```js
buildOutputScript([['1LukeQU5jwebXbMLDVydeH4vFSobRV9rkj', 100000000]]);
// '0100e1f505000000001976a914da6473ed373e08f46dd8003fca7ba72fbe9c555e88ac'
```

Send 1 BTC to `1LukeQU5jwebXbMLDVydeH4vFSobRV9rkj` and 1 BTC to `1BitcoinEaterAddressDontSendf59kuE`

```js
buildOutputScript([
  ['1LukeQU5jwebXbMLDVydeH4vFSobRV9rkj', 100000000],
  ['1BitcoinEaterAddressDontSendf59kuE', 100000000]
]);
// '0200e1f505000000001976a914da6473ed373e08f46dd8003fca7ba72fbe9c555e88ac00e1f505000000001976a914759d6677091e973b9e9d99f19c68fbf43e3f05f988ac'
```

## License

MIT © Luke Childs
