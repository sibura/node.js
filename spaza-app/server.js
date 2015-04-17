 /*var express = require('express');
   var app = express();
   */
   var express = require('express');
   var exphbs  = require('express-handlebars');



   // create a route
   var app = express();

   app.engine('handlebars', exphbs({defaultLayout: 'main'}));
   app.set('view engine', 'handlebars');

   var fs = require('fs');

  //var products = require('./least_popular_products')
  //var sortedList = products.productNames('Nelisa  Sales History.csv');

 var Products = require('./most_popular_products');
 var products = new Products();
 var productList = products.productNames('./Nelisa Sales History.csv');
 var groupedProducts = products.groupItems(productList);
 var mostPopular = products.mostpopularproducts(groupedProducts);

  //console.log(leastPopular);
  console.log("most popular... : " + mostPopular.name);

  //console.log(mostPopularCateg);
  //console.log(leastpopularCateg);

  app.get('/', function (req, res) {
    res.render('home');

  });

  app.get('/most_popular_products', function (req, res) {
    
    //console.log("*** " + mostPopular.name);

    res.render('most_popular_products', {
      mostpopular : mostPopular,
      leastPopular:{name:'prop', amt: 0}
   });

 });

  app.listen(3000);

   /*
   app.get('/', function (req, res) {
     res.send('Hello codeX!');
   });
   app.use(express.static('public'));
  
   app.get('/hello', function (req, res) {
     res.send('Hello sbu!');
   });

   app.get('/hells', function (req, res){
    res.send('linkie');
   });

   //start the server
   var server = app.listen(3000, function () {

     var host = server.address().address;
     var port = server.address().port;
    // var handlebars = sever.address().compile;

     console.log('Example app listening at  http://%s:%s', host, port);

   });
 */
//});