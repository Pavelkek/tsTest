import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  specs: [ 'ts.js' ],
  seleniumAddress: 'http://localhost:4444/wd/hub',
};