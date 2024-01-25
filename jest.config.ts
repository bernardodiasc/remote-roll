import nextJest from 'next/jest'

import type { Config } from '@jest/types'
import type { JestConfigWithTsJest } from 'ts-jest'

const createJestConfig = nextJest({
  dir: './',
})

const config: JestConfigWithTsJest = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      { presets: ['@babel/env', '@babel/react'] },
    ],
  },
  globals: {
    __PATH_PREFIX__: '',
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  collectCoverage: false,
  coverageProvider: 'v8',
  collectCoverageFrom: ['src/**/*.[jt]s?(x)'],
  testMatch: ['<rootDir>/src/**/?(*.)+(test).[jt]s?(x)'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/.jest/__mocks__/file-mock.js',
    '^@dev/(.*)$': '<rootDir>/dev/$1',
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@containers/(.*)$': '<rootDir>/src/containers/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@theme/(.*)$': '<rootDir>/src/theme/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.github/',
    '<rootDir>/.husky/',
    '<rootDir>/.jest/',
    '<rootDir>/.next/',
    '<rootDir>/.storybook/',
    '<rootDir>/out/',
    '<rootDir>/public/',
  ],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  setupFiles: [],
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.js'],
}

export default createJestConfig(config as Config.InitialOptions)
