const base = require('../../jest.config');

module.exports = {
    ...base,
    roots: ['<rootDir>/src/js/'],
    setupFilesAfterEnv: ['<rootDir>/setupTest.js'],
    moduleNameMapper: {
        ...base.moduleNameMapper,
        '^@actions/(.*)$': '<rootDir>/src/js/actions/$1',
        '^@components/(.*)$': '<rootDir>/src/js/components/$1',
        '^@containers/(.*)$': '<rootDir>/src/js/containers/$1',
        '^@reducers/(.*)$': '<rootDir>/src/js/reducers/$1',
        '^@sagas/(.*)$': '<rootDir>/src/js/sagas/$1',
        '^@store/(.*)$': '<rootDir>/src/js/store/$1',
        '^@util/(.*)$': '<rootDir>/src/js/util/$1',
    },
    collectCoverageFrom: [
        '!<rootDir>/src/js/index.tsx',
        '!<rootDir>/src/js/store/**/*.ts',
        '!<rootDir>/src/js/containers/**/*.*',
        ...base.collectCoverageFrom,
    ],
    coverageThreshold: {
        global: {
            branches: 60,
            functions: 60,
            lines: 60,
            statements: 60,
        },
    },
};
