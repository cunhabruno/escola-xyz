module.exports = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  browserName: 'chrome',

  pageObjects: [
    'e2e/src/page-objects'
  ],

  featureFiles : [
    'e2e/src/features/turmas-list.feature',
    'e2e/src/features/global-search.feature'
  ],

  stepDefinitions : [
    'e2e/src/features/step-definitions'
  ],

  tags : '@run'
};
