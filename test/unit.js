import test from 'ava';
import buildOutputScript from '..';

test('Single address and value input returns valid output script', t => {
	const outputScipt = buildOutputScript([['1LukeQU5jwebXbMLDVydeH4vFSobRV9rkj', 100000000]]);
	const expectedOutputScript = '0100e1f505000000001976a914da6473ed373e08f46dd8003fca7ba72fbe9c555e88ac';

	t.is(outputScipt, expectedOutputScript);
});
