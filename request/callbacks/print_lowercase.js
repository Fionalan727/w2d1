var getHTML = require('../callbackModule');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {

  /* Write your code here! */
  var lowercase = html.toLowerCase();
  console.log(lowercase);
}

getHTML(requestOptions, printLowerCase);
