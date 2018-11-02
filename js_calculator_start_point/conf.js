exports.config = {
  framework: 'mocha',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/integration/tests.js']
};
// tells selenium how to run our tests
// this is mocha for our browser
