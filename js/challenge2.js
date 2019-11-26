$("#useBilling").click(function(){
	var home = $("#home");
	var billing = $("#billing");
	if (this.checked){
		console.log("Checked")
		home.val(billing.val());
		home.prop("disabled", true);
	}
	else{
		console.log("Not checked")
		home.val("");
		home.prop("disabled", false);
	}
});
