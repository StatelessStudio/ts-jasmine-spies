# ts-jasmine-spies - Readme

This package helps you write jasmine tests that capture and inspect console output, errors, exit codes, etc.

## Installation

`npm i ts-jasmine-spies --save-dev`

## Mocks

### Console (stdout & stderr)

```typescript
import { MockConsole } from 'ts-jasmine-spies';

describe('My Jasmine Suite', () => {
    let mockConsole: MockConsole;

    beforeEach(() => {
        mockConsole = new MockConsole();
    });

    it('writes stuff to the console', () => {
        console.log('Log something!');
        mockConsole.expectStdout('Log something!\n');
    });

    it('contains something', () => {
        console.log('Log something!');
        mockConsole.expectStdoutContains('something');
    });

    it('writes stuff to the error log', () => {
        console.error('Oops! An error occurred!');
        mockConsole.expectStderr('Oops! An error occurred!\n');
    });

    it('contains something in the error log', () => {
        console.error('Oops! Something broke!');
        mockConsole.expectStderrContains('Something');
    });

    it('logs an error beginning with "Oops"', () => {
        console.error('Oops! Something broke!');
        expect(mockConsole.stdout.startsWith('Oops!')).toBeTrue();
    })
})
```

### Exit code (process.exit)

```typescript
import { MockExit } from 'ts-jasmine-spies';

describe('My Jasmine Suite', () => {
    let mockExit: MockExit;

    beforeEach(() => {
        mockExit = new MockExit();
    });

    it('exits with code 0 on success', () => {
        process.exit(0);

        mockExit.expectExit(0);
    });

    it('exits with code 1 on specific error', () => {
        process.exit(1);

        mockExit.expectExit(0);
    });

    it('exits with a non-zero exit code on error', () => {
        process.exit(42);

        expect(mockExit.code).toBeGreaterThanOrEqual(1);
    })
})
```

## Contributing & Development

See [contributing.md](docs/contributing/contributing.md) for information on how to develop or contribute to this project!
