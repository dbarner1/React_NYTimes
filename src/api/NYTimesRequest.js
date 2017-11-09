import  { retrieveDateParams } from '../helpers/retrieveDateParams';

var responseReceived;

function NYTimesRequest(type) {
  var API_KEY_PARAM = 'api-key=a8457610b68381085a3fff38d6a36337:6:74255139';
  var DATE_PARAMS = retrieveDateParams(6);
  var PARAMS = API_KEY_PARAM + DATE_PARAMS;
  var url = 'http://api.nytimes.com/svc/topstories/v2/' + type + '.json?'+ PARAMS;

  fetch(url)
    .then(response => response.json())
    .then(function(response) {
      responseReceived = response;
    })
    .catch(error => console.error("No data returned"));

    return responseReceived;
}

export {NYTimesRequest};

//Currently not used, but will be in the future if there are enough calls to the API!
