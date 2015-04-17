var assert = require("assert");

var Products = require("../most_popular_products");

  describe("Find most popular products - ", function(){

	it('should return a list of products objects', function(){

		var products = new Products();
		var shop = products.productNames('./Nelisa Sales History.csv');
		//console.log(shop);
		assert.equal(448, shop.length);
		assert.equal("Imasi", shop[1].itemName);
		
	});


    
	it('should return product qty map', function(){

		var products = new Products();
        var shop = products.productNames('./Nelisa Sales History.csv');

		var expectedMap = {'Milk':142, 'Imasi':125, 'Bread':130, 'Chakalaka Can':94, 'Gold Dish Vegetable Curry Can':86, 'Fanta 500ml':94, 'Coke 500ml':159, 'Cream Soda 500ml':75, 'Iwisa Pap 5kg':47, 'Top Class Soy Mince':98, 'Shampoo 1 litre':26, 'Soap Bar':50, 'Bananas - loose': 114, 'Apples - loose':114, 'Mixed Sweets 5s':172, 'Heart Chocolates':20, 'Rose (plastic)': 14, 'Valentine Cards':14};
		var groups = products.groupItems(shop);
		var productMap = products.groupItems(groups);
       
		//?? no assert

		assert.deepEqual(productMap, expectedMap);
});



it('should return the most popular products', function(){

	var products = new Products();
	var shop = products.productNames('./Nelisa Sales History.csv');
	
	var result = {name:'Mixed Sweets 5s', amt:172};
	var groups = products.groupItems(shop);
	var productsResults = products.mostpopularproducts(groups);
	  assert.deepEqual(result, productsResults);
	  	 
});

it('should return the least popular products', function(){

	var products = new Products();
	var shop = products.productNames('./Nelisa Sales History.csv');

	var result = {name: 'Rose (plastic)', amt: 14};
	var groups = products.groupItems(shop);
	var productsResults = products.leastpopularproducts(groups );
	   //console.log(productsResults);
	  assert.deepEqual(result, productsResults);

	});
});

   it('should return CatMap',function(){
	var products = new Products();
    var shop = products.productNames('./Nelisa Sales History.csv');

	var listOfCategory = [
	{CatName:'Dairy Product', soldItems: 267},
	{CatName:'Bakery Product', soldItems:130},
	{CatName:'Can Food',soldItems:180},
	{CatName:'Cold Bevarage', soldItems:328},
	{CatName:'Bulk', soldItems:47},
	{CatName:'Soup', soldItems:98},
	{CatName:'Cosmetics', soldItems:76},
	{CatName:'Fruits', soldItems:228},
	{CatName:'Confectionarie', soldItems:192},
	{CatName:'Valentine Goodies', soldItems:28},
	];

    var expectedMap = {"Dairy Product":267,"Bakery Product":130,"Can Food":180,"Cold Bevarage":328,"Bulk":47,"Soup":98,"Cosmetics":76,"Fruits":228,"Confectionarie":192,"Valentine Goodies":28};
	var catMap = products .groupCateg(listOfCategory);
	//console.log(listOfCategory);
	assert.deepEqual(expectedMap, catMap);
});

it('should return the most popular category', function(){
	var products = new Products();
	var shop = products.productNames('./Nelisa Sales History.csv');
  
  /*  
    var listOfCategory = [
	{CatName:'Dairy Product', soldItems: 267},
	{CatName:'Bakery Product', soldItems:130},
	{CatName:'Can Food',soldItems:180},
	{CatName:'Cold Beverages', soldItems:328},
	{CatName:'Bulk', soldItems:47},
	{CatName:'Soup', soldItems:98},
	{CatName:'Cosmetics', soldItems:76},
	{CatName:'Fruits', soldItems:228},
	{CatName:'Confectionarie', soldItems:192},
	{CatName:'Valentine Goodies', soldItems:28},
	];
*/
	var result = {name:'Cold Beverages', amt:328};
	var groups = products.groupCateg(shop);
	var categoryResults = products.mostPopularCtg(groups);
	  console.log(groups);
	assert.deepEqual(result, categoryResults);

});

it('should return the least popular category', function(){
		var products = new Products();
        var shop = products.productNames('./Nelisa Sales History.csv');

	var result = {name:'Valentine Goodies', amt:28};
	var groups = products.groupCateg(shop);
	var categoryResults = products.leastPopularCtg(groups);
	 //console.log(categoryResults);
     assert.deepEqual(result, categoryResults);

});
