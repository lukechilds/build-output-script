const bs58check = require('bs58check');
const { encode: numberToCompactSizeUInt } = require('varuint-bitcoin');
const { OP_DUP, OP_HASH160, OP_EQUALVERIFY, OP_CHECKSIG } = require('bitcoin-ops');

const addressDecode = address => bs58check.decode(address).slice(1);

const checkUInt53 = number => {
	if (number < 0 || !Number.isSafeInteger(number)) {
		throw new RangeError('value out of range');
	}
};

const numberToUInt64 = number => {
	checkUInt53(number);

	const buffer = Buffer.alloc(8);

	buffer.writeUInt32LE(number >>> 0);
	buffer.writeUInt32LE((number / 0x100000000) | 0, 4);

	return buffer;
};

const buildOutputScript = outputs => {
	if (!Array.isArray(outputs)) {
		throw new TypeError(`Expected 'outputs' to be of type 'array', got: '${outputs}'.`);
	}

	if (outputs.length === 0) {
		throw new TypeError('\'outputs\' cannot be an empty array.');
	}

	let outputScript = [...numberToCompactSizeUInt(outputs.length)];

	for (const [address, value] of outputs) {
		const pubKeyHash = addressDecode(address);

		const scriptPubKey = [
			OP_DUP,
			OP_HASH160,
			pubKeyHash.length,
			...pubKeyHash,
			OP_EQUALVERIFY,
			OP_CHECKSIG
		];

		outputScript = [
			...outputScript,
			...numberToUInt64(value),
			...numberToCompactSizeUInt(scriptPubKey.length),
			...scriptPubKey
		];
	}

	return Buffer.from(outputScript).toString('hex');
};

module.exports = buildOutputScript;
