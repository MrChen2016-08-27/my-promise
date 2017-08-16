describe('achieve promise test', function (){
	it('test promise then', function(){
		let iPr = new iPromise((reslove) => {
			let x = 12;
			reslove(x);
		});
		iPr.then(function(value){
			expect(value).toBe(12);
		});
	});
});