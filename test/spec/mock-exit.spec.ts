import { MockExit } from '../../src/mock-exit';

function fakeExit(code: number): void {
	process.exit(code);
}

describe('MockExit', () => {
	let mockExit: MockExit;

	beforeEach(() => {
		mockExit = new MockExit();
	});

	it('should initialize with null exit code', () => {
		expect(mockExit.code).toBeNull();
	});

	it('should capture the exit code when process.exit is called', () => {
		fakeExit(1);
		expect(mockExit.code).toBe(1);
	});

	it('should verify the expected exit code', () => {
		fakeExit(0);
		mockExit.expectExit(0);
	});
});
