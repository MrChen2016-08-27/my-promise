const PENDING = 0;
const RESOLVED = 1;
const REJECTED = 2;
var status = PENDING;
function iPromise(fn){
	let callbacks = [], value = null;
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
			console.log(status);
			if(status === PENDING){
				callbacks.push(onFullfilled);
				return;
			}
			resolve(onFullfilled);
		});
	};	
	fn(resolve, reject);
}

(function(){
	let iPro = new iPromise((reslove) => {
		let y = 1;
		reslove(y);
	});
	let num = iPro.then(function(value){
		return value * 2;
	}).then(function(value){
		//console.log(value);
		return value;
	});

}());