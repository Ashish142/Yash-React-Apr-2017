var app = (function(){

	function addSync(x,y){
		console.log(`		[@Service] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`		[@Service] returning the result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[@Client] triggering addSync`);
		var result = addSync(x,y);
		console.log(`[@Client] result = ${result}`);
	}


	function addAsync(x,y, onResult){
		console.log(`		[@Service] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`		[@Service] returning the result`);
			if (typeof onResult === 'function')
				onResult(result);
		}, 4000);
	}

	function addAsyncClient(x,y){
		console.log(`[@Client] triggering addAsync`);
		addAsync(x,y, function(result){
			console.log(`[@Client] result = ${result}`);	
		});
	}

	var addAsyncEvents = (function(){
		var _subscriptions = []
		function process(x,y){
			console.log(`		[@Service] processing ${x} and ${y}`);
			setTimeout(function(){
				var result = x + y;
				console.log(`		[@Service] returning the result`);
				_subscriptions.forEach(callback => callback(result));
			}, 4000);
		}
		function subscribe(callback){
			_subscriptions.push(callback);
		}
		return {
			process : process,
			subscribe : subscribe
		}
	})();

	function addAsyncPromise(x,y){
		console.log(`		[@Service] processing ${x} and ${y}`);

		var promise = new Promise(function(resolveFn, rejectFn){
			setTimeout(function(){
				var result = x + y;
				console.log(`		[@Service] returning the result`);
				resolveFn(result);
			}, 4000);
		});
		

		return promise;
	}

	return {
		addSyncClient : addSyncClient,
		addAsyncClient : addAsyncClient,
		addAsyncEvents : addAsyncEvents,
		addAsyncPromise : addAsyncPromise
	}
})();













