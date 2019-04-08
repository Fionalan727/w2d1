var getHTML = require('../callbackModule');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printRevers(html) {

  /* Write your code here! */
  var reversed = html.split("").reverse().join("");
  console.log(reversed);
}

getHTML(requestOptions, printRevers);
