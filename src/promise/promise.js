function iPromise(fn){
	let callbacks = [];
	this.then = function (onFullfilled){
		callbacks.push(onFullfilled);
	};
	function resolve (value){
		//避免被同步函数调用提前执行的问题
		setTimeout(() => {
			callbacks.forEach(function(callback){
				callback(value);
			});
		}, 0);
	}
	fn(resolve);
}