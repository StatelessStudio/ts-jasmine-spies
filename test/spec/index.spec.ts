import 'jasmine';
import * as index from '../../src';

describe('ts-jasmine-spies', () => {
	it('exports a', () => {
		expect(index.a).toBeTrue();
	});
});
