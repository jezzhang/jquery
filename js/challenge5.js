var imgs = $("img");
var msg = "Hover over an image below!"
for (let i = 0; i < imgs.length; i++){
	imgs[i].onmouseover = function() {
		$('#image').css("backgroundImage", "url('"+imgs[i].src+"')");
		$('#image').html(imgs[i].alt);
	 }

	 imgs[i].onfocus = function() {
		$('#image').css("backgroundImage", "url('"+imgs[i].src+"')");
		$('#image').html(imgs[i].alt);
	 }

	 imgs[i].onmouseleave = function() {
		 $('#image').css("backgroundImage", "url('')");
		 $('#image').html(msg);
	 }

	 imgs[i].onblur = function() {
		 $('#image').css("backgroundImage", "url('')");
		 $('#image').html(msg);
	 }
}
