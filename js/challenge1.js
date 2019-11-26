$("#subscribe").click(function(){
	var email = $("#emailField");
	if (this.checked){
		console.log("Checked");
		email.css("display", "block");
	}
	else {
		console.log("Not checked");
		email.css("display", "none");
	}

});
