$("#ch3form").submit(function() {
	var f_check = false;
  var s_check = false;

	var fruit = $('input[name="fruit"]');
	var standing = $('input[name="standing"]');

	fruit.each(function() {
		if(this.checked) {
			f_check = true;
      console.log("Fruit checked")
		}
	})

	standing.each(function() {
		if (this.checked) {
      s_check = true;
      console.log("Standing checked")
		}
	})

  if (f_check && s_check) {
      return true;
      console.log("Both checked")
  }

	else {
    alert("You must pick at least one of each!")
		return false;
	}
})
