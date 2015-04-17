var fs = require('fs');

module.exports =function(){

	this.productNames = function(filePath){	

		//console.log("...");

		var linesInfile = fs.readFileSync(filePath, 'utf8');
		//console.log("file details : " + linesInfile);

		var rows = linesInfile.split('\n');
		//console.log(rows.length);

		var listOfProduct = [];

		var lineNumber = 0;

		rows.forEach(function(row) {
			if(lineNumber != 0){
                
				var columns = row.split(';');
				var currentItem = columns[2];
				var numberSold = Number(columns[3]);

				var salesObj = {
					itemName: currentItem,
					soldItem: numberSold
				};

				listOfProduct.push(salesObj);
			}
			lineNumber = lineNumber +1;
		});

		return listOfProduct;
	}


	this.groupItems = function(listOfProduct){
		var itemMap = {};

		listOfProduct.forEach(function(product){

			var currentItem = product.itemName;
			var numberSold = product.soldItem;

			if(itemMap[currentItem]=== undefined){
				itemMap[currentItem]=0;
			}

			itemMap[currentItem]=itemMap[currentItem]+ Number(numberSold);

		});
		return itemMap;
		//console.log("this is itemmap" +itemMap);
	}; 

	this.mostpopularproducts= function(itemMap){
		var mostPopularProdct = {};
		var max = 0;
		for(var prop in itemMap){
			var value = itemMap[prop];
			if(itemMap[prop] > max){
				max = itemMap[prop];
				mostPopularProdct = {
					name: prop,
					amt: max

				}
			};
		}
		return mostPopularProdct;
	};

	this.leastpopularproducts= function(itemMap){
		var leastPopularProdct = {};
		var min = 172;
		for(var prop in itemMap){
			var value = itemMap[prop];
			if(itemMap[prop] < min){
				min = itemMap[prop];
				leastPopularProdct = {
					name: prop,
					amt: min
				}
			};
		}
		return leastPopularProdct;
	}

	this.groupCateg = function(products) {
		var CatMap = {};

		products.forEach(function(product) {
			var CatItem = product.CatName;
			var numberSold = product.soldItems;

			if(CatMap[CatItem] === undefined){
				CatMap[CatItem] = 0;
			}
			CatMap[CatItem] = CatMap[CatItem] + Number(numberSold);

		});
		return CatMap;

	};

	this.mostPopularCtg = function(CatMap){
		var mostPopularCategory = {};
		var max = 0;
		for(var Cat in CatMap) {
			var value = CatMap[Cat];
			if(value.soldItems > max) {
				max = value.soldItems;
				mostPopularCategory = {
					name : value.CatName,
					amt  : value.soldItems
				}
			};
		};
		return mostPopularCategory;
	};
         //console.log(itemMap);
         

         this.leastPopularCtg = function(CatMap){
         	var leastPopularCategory = {};
         	var min = 0;
         	for(var Cat in CatMap) {
         		var value = CatMap[Cat];
         		if(CatMap[Cat] + min) {
         			min = CatMap[Cat];
         			leastPopularCategory = {
         				name : Cat,
         				amt  : min
         			}
         		};
         	};
         	return leastPopularCategory;
         };
     };
