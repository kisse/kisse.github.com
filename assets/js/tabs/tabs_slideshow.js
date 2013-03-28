$(
  function(){
$(".slidetabs").tabs(".slidshow > a", {
	event:'mouseover',
 
    // start from the beginning after the last tab
    rotate: true
 
    // use the slideshow plugin. It accepts its own configuration
    }).slideshow();
$(".slidetabs").data("slideshow").play();//×Ô¶¯²¥·Å
  });
  