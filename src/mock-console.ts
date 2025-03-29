export class MockConsole {
	public stdout = '';
	public stderr = '';

	public constructor() {
		spyOn(process.stdout, 'write').and.callFake((data: string) => {
			this.stdout += data;
			return true;
		});

		spyOn(process.stderr, 'write').and.callFake((data: string) => {
			this.stderr += data;
			return true;
		});
	}

	public expectStdout(expected: string) {
		expect(this.stdout).withContext('stdout').toEqual(expected);
	}

	public expectStdoutContains(expected: string) {
		expect(this.stdout).withContext('stdout').toContain(expected);
	}

	public expectStderr(expected: string) {
		expect(this.stderr).withContext('stderr').toEqual(expected);
	}

	public expectStderrContains(expected: string) {
		expect(this.stderr).withContext('stderr').toContain(expected);
	}
}
