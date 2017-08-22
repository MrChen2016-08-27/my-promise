
function iPromise(fn){
	const PENDING = 0;
	const RESOLVED = 0;
	const REJECTED = 0;
	let callbacks = [], value = null, status = PENDING;
	//成功后执行的函数
	function resolve (newValue){
		//避免被同步函数调用提前执行的问题
		setTimeout(() => {
			value = newValue;
			status = RESOLVED;
			callbacks.forEach(function(callback){
				callback(value);
			});
		}, 0);
	}
	//失败的回调函数
	function reject (err){
		value = err;
		status = REJECTED;
	}
	//then 方法, 链式调用
	this.then = function (onFullfilled, onRejected){
		return new iPromise(function(resolve, reject){
			if(status === PENDING){
				callbacks.push(onFullfilled);
				return;
			}
			resolve(onFullfilled);
		});
	};	
	fn(resolve, reject);
}
