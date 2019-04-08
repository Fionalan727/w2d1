function getAndPrintHTML (options) {
  var https = require('https');
  /* Add your code here */
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      var dataStore;
      dataStore += data;
      console.log(dataStore);
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
