module.exports = function getHTML (options, callback) {
    /* Your code here */
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
  };
