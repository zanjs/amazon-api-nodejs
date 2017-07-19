const { OperationHelper } = require('apac');


const opHelper = new OperationHelper({
  awsId: "",
  awsSecret: "",
  assocId: ""
});

opHelper.execute('ItemSearch', {
  'SearchIndex': 'Books',
  'Keywords': 'harry potter',
  'ResponseGroup': 'ItemAttributes,Offers'
}).then((response) => {
  console.log("Results object: ", response.result);
  console.log("Raw response body: ", response.responseBody);
}).catch((err) => {
  console.error("Something went wrong! ", err);
});