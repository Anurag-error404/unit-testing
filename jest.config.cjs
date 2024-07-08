module.exports = {
  // roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testEnvironment: "jest-environment-jsdom",
  rootDir:"src",
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__tests__/__ mocks __/fileMock.js",
    "/\.(css|less)$/": " <rootDir>/__tests__/__ mocks __/styleMock.js"
  },
  resolver: undefined,
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};
