module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/build/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/*.d.ts(x)?',
    '!src/types/**/*.d.ts',
    '!src/api/*.ts',
    '!src/types/*.ts',
    '!src/themes/theme.ts',
    '!src/themes/index.tsx',
    '!src/styles/**/*.ts',
    '!src/**/mock.ts',
    '!src/components/**/index.tsx',
    '!src/components/**/types.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).[tj]s?(x)'],
  moduleDirectories: ['node_modules', 'src']
}
