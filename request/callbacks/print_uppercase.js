var getHTML = require('../callbackModule.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  /* Write your code here! */
  var uppercase = html.toUpperCase();
  console.log(uppercase);
}

getHTML(requestOptions, printUpperCase);
