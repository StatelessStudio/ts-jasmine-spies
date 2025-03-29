import 'jasmine';
import * as index from '../../src';

describe('ts-jasmine-spies', () => {
	it('should export MockConsole', () => {
		expect(index.MockConsole).toBeDefined();
		expect(index.MockConsole).toEqual(jasmine.any(Function));
	});

	it('should export MockExit', () => {
		expect(index.MockExit).toBeDefined();
		expect(index.MockExit).toEqual(jasmine.any(Function));
	});
});
