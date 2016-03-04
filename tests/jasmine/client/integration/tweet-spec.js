describe("tweet feature specs", function() {

	it("should have label", function() {
		expect($('label').text()).toEqual('What are you doing?')
		expect($('label').attr('for')).toEqual('tweetInputBox')
	});

	it("should have a textbox with class of form-control", function() {
		expect($('#tweetInputBox').is('.form-control')).toBe(true);
	});

	it("should have a character limit of 140 and be 4 rows high", function() {
		expect($('textarea').attr('rows')).toEqual('4');
		expect($('textarea').attr('maxlength')).toEqual('140');
	});

	it("should have a div with class text-right", function() {
		expect($('div').is('.text-right')).toBe(true);
	});

	it("should have a submit button with class of btn btn-primary", function() {
		expect($('button').text()).toEqual('Submit');
	});

});