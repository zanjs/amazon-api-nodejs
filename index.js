var amazon = require('amazon-product-api'),
  koa = require('koa'),
  router = require('koa-router');

var app = new koa();
app.use(router(app));


var client = amazon.createClient({
  awsTag: "2008507-20",
  awsId: "AKIAIWTNLLX5Q5POYGRQ",
  awsSecret: "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"
});


app.get('/amazon/:index', function*() {
  this.body = yield client.itemSearch({
    keywords: this.query.title,
    searchIndex: this.params.index,
    responseGroup: 'ItemAttributes,Offers,Images'
  });
});

app.listen(3000);