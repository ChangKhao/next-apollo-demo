const nextJest = require('next/jest');
const createJestConfig = nextJest({
    dir: './'
});
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    modulePathIgnorePatterns: ['<rootDir>/cypress']
};

module.exports = createJestConfig(customJestConfig);