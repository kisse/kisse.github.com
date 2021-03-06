$(function(){
		   var root = $("#wizard").scrollable();
		   // some variables that we need
    var api = root.scrollable(), drawer = $("#drawer");
 
    // validation logic is done inside the onBeforeSeek callback
    api.onBeforeSeek(function(event, i) {
 
    // we are going 1 step backwards so no need for validation
    if (api.getIndex() < i) {
 
		         // 1. get current page
		         var page = root.find(".page").eq(api.getIndex()),
 
			 // 2. .. and all required fields inside the page
			 inputs = page.find(".required :input").removeClass("error"),
 
			 // 3. .. which are empty
			 empty = inputs.filter(function() {
			 return $(this).val().replace(/\s*/g, '') == '';
			 });
 
		         // if there are empty fields, then
		         if (empty.length) {
 
			 // slide down the drawer
			 drawer.slideDown(function()  {
 
			 // colored flash effect
			 drawer.css("backgroundColor", "#fff");
			 setTimeout(function() { drawer.css("backgroundColor", "#fff"); }, 1000);
			 });
 
			 // add a CSS class name "error" for empty & required fields
			 empty.addClass("error");
 
			 // cancel seeking of the scrollable by returning false
			 return false;
 
		         // everything is good
		         } else {
 
			 // hide the drawer
			 drawer.slideUp();
		         }
 
	                 }
 
	                 // update status bar
	                 $(".ui-ministep li").removeClass("ui-ministep-active").eq(i).addClass("ui-ministep-active");
 
                         });
		   
		   });