function getHTML (options, callback) {
  var https = require('https');
  /* Add your code here */
  var dataStore;
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {

      dataStore += data;
      console.log(dataStore);
    });

    response.on('end', function () {
      callback(dataStore);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};
getHTML(requestOptions, printHTML)
