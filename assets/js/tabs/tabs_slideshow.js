$(
  function(){
$(".slidetabs").tabs(".slidshow > a", {
	event:'mouseover',
 
    // start from the beginning after the last tab
    rotate: true
 
    // use the slideshow plugin. It accepts its own configuration
    }).slideshow({clickable:false});
$(".slidetabs").data("slideshow").play();//×Ô¶¯²¥·Å
  });
  