export default {
  moduleFileExtensions: ["js", "jsx", "json", "ts", "vue"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^~/(.*)$": "<rootDir>/src/$1",
    "^vue$": "vue/dist/vue.cjs.js",
  },
  transform: {
    "^.+\\.ts$": ["ts-jest", { compiler: "ttypescript" }],
    // "^.+\\.ts$": "ts-jest",
    "^.+\\.(vue)$": "@vue/vue3-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!@ivanv/vue-collapse-transition)"],
  preset: "ts-jest",
  coverageReporters: ["text", "cobertura", "lcov"],
  collectCoverageFrom: [
    // we exclude index.ts files from coverage, because they are just exporting resources to make them accessible when
    // this is packaged as a library
    "<rootDir>/src/components/**/*.vue",
    "<rootDir>/src/test/**/{!(index),}.ts",
  ],
  reporters: [
    // This enables console output for local development and build log output in Pipelines.
    "default",

    // This is to populate the Tests tab on the Build Results page in Azure Pipelines.
    // See the "publish test results" step in ./azure-pipelines.yml.
    [
      "jest-junit",
      {
        outputDirectory: ".",
        outputName: "./test-results/junit.xml",
      },
    ],
  ],
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
};
