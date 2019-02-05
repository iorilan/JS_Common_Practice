Promise.all([GetResource1(),GetResource2()])
	   .then([json1,json2])=>{
		   //process json1
		   //process json2
	   }
	   
var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]