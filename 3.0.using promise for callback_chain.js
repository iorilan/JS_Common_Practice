function doSomething1(){
	return new Promise((resolve, reject) => {
	if (Math.random() > 0.05) {
      resolve("step1 success");
    } else {
      reject("step1 fail");
    }
  })
}

function doSomething2() {
	console.log("called step2");
  return new Promise((resolve, reject) => {
    
    if (Math.random() > 0.5) {
      resolve("step2 success");
    } else {
      reject("step2 fail");
    }
  })
}

function doSomething3(){
	console.log("called step3");
	return new Promise((resolve, reject) => {
	if (Math.random() > 0.05) {
      resolve("step3 success");
    } else {
      reject("step3 fail");
    }
  })
}


doSomething1()
.then(function(data){
	console.log(data);
	return doSomething2();
})
.then(function(data2){
	console.log(data2);
	return doSomething3();
})
.then(function(data3){
	console.log(data3);
	alert("all done");
})
.catch(function(e){
	console.log("error:"+e);
})
