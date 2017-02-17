module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/angular/angular.js',  
      'node_modules/angular-mocks/angular-mocks.js',
      'controller/*.js',
      'controller/*.spec.js',
      'service/*.js',
      'service/*.spec.js'
    ],
    exclude: [
    ],
    preprocessors: {},
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [/*'Chrome',*/'PhantomJS'],
    singleRun: true,
    plugins : [
        'karma-chrome-launcher',
        'karma-jasmine',
        'karma-phantomjs-launcher'
    ]
  });
};