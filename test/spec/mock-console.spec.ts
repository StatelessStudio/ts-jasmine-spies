import 'jasmine';
import { MockConsole } from '../../src/mock-console';

describe('MockConsole', () => {
	let mockConsole: MockConsole;

	beforeEach(() => {
		mockConsole = new MockConsole();
	});

	it('should capture stdout writes', () => {
		process.stdout.write('Hello, stdout!');
		mockConsole.expectStdout('Hello, stdout!');
	});

	it('should capture stderr writes', () => {
		process.stderr.write('Hello, stderr!');
		mockConsole.expectStderr('Hello, stderr!');
	});

	it('should verify stdout contains specific text', () => {
		process.stdout.write('This is a test for stdout.');
		mockConsole.expectStdoutContains('test for stdout');
	});

	it('should verify stderr contains specific text', () => {
		process.stderr.write('This is a test for stderr.');
		mockConsole.expectStderrContains('test for stderr');
	});

	it('should handle multiple writes to stdout', () => {
		process.stdout.write('First write. ');
		process.stdout.write('Second write.');
		mockConsole.expectStdout('First write. Second write.');
	});

	it('should handle multiple writes to stderr', () => {
		process.stderr.write('First error. ');
		process.stderr.write('Second error.');
		mockConsole.expectStderr('First error. Second error.');
	});
});
