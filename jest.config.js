const config = {
	preset: 'ts-jest',
	setupFilesAfterEnv: ['./tests/utils/setup/index.ts'],
	collectCoverageFrom: [
		'<rootDir>/src/**/*.ts',
		'!<rootDir>/src/index.ts',
		'!<rootDir>/src/config/**/*.ts',
		'!<rootDir>/src/protocol/**/*.ts',
		'!<rootDir>/src/**/types.ts',
		'!<rootDir>/tests',
		'!**/protocols/**',
		'!**/protocols.ts',
		'!**/entities/**',
		'!**/test/**',
		'!**/tests/**',
	],
	coverageDirectory: 'coverage',
	coverageReporters: ['json-summary', 'json', 'lcov', 'text', 'clover'],
	coverageProvider: 'babel',
	testEnvironment: 'node',
	transform: {
		'.+\\.ts$': ['ts-jest', { isolatedModules: true }],
	},
	testMatch: ['**/*.(spec|test).ts'],
	moduleNameMapper: {
		'~/(.*)': '<rootDir>/src/$1',
	},
	clearMocks: true,
};

module.exports = config;
