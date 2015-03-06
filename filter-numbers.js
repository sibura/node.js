function filter_numbers(num) {
    var y = [];

   for(var x=1; x<= num; x++){
	   	if(x%2 === 0){
	    	y.push(x);
	    }
   }
   return y;

}

	console.log(filter_numbers(20));