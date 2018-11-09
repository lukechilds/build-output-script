import test from 'ava';
import buildOutputScript from '..';

test('Single address and value input returns valid output script', t => {
	const outputScipt = buildOutputScript([['1LukeQU5jwebXbMLDVydeH4vFSobRV9rkj', 100000000]]);
	const expectedOutputScript = '0100e1f505000000001976a914da6473ed373e08f46dd8003fca7ba72fbe9c555e88ac';

	t.is(outputScipt, expectedOutputScript);
});

test('Multiple address and value inputs returns valid output script', t => {
	const outputScipt = buildOutputScript([
		['1LukeQU5jwebXbMLDVydeH4vFSobRV9rkj', 100000000],
		['1BitcoinEaterAddressDontSendf59kuE', 100000000]]
	);
	const expectedOutputScript = '0200e1f505000000001976a914da6473ed373e08f46dd8003fca7ba72fbe9c555e88ac00e1f505000000001976a914759d6677091e973b9e9d99f19c68fbf43e3f05f988ac';

	t.is(outputScipt, expectedOutputScript);
});
