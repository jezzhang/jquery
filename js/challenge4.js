ch4form.onsubmit = function() {
    var name = $("#fullname")
    var address = $("#streetaddr")

    if (name.val().length == 0){
        $("#nameerrormsg").show();
        console.log("No name");

        if (address.val().length == 0){
          $("#addrerrormsg").show();
          console.log("No address");
          return false;

        }
        return false;
    }
    else {
      if (address.val().length == 0){
          $("#addrerrormsg").show();
          console.log("No address");
          return false;
      }
      else {
        return true;
      }
    }

}
