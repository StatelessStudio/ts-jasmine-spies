export class MockExit {
	public code: null | number = null;

	public constructor() {
		spyOn(process, 'exit').and.callFake(<typeof process.exit>((
			code: number
		) => {
			this.code = code;
		}));
	}

	public expectExit(code: number): void {
		expect(this.code).withContext('exit code').toEqual(code);
	}
}
