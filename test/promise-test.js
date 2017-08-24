describe('achieve promise test', function (){
	it('test promise then', function(done){
		let iPr = new iPromise((reslove) => {
			let x = 12;
			reslove(x);
		});
		iPr.then(function(value){
			done();
			expect(value).toBe(12);
		})
	});

	it('test promise then chain', function(done){
		let iPro = new iPromise((reslove) => {
			let y = 1;
			reslove(y);
		});
		iPro.then(function(value){
			done();
			return value * 2;
		}).then(function(value){
			done();
			return value;
		});
	});
});