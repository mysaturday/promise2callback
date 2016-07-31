## README

Just works on promise as is is a callback

```js

p2c = require('promise2callback');

promise = new Promise(function(resolve, reject){
	setTimeout(function(){
		resolve("DONE");
	}, 2000);
});

var callback = function(err, res){
	console.error(err);
	console.log(res);
}

p2c(promise, callback);

```