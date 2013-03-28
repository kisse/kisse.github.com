/*$(
  function() {
	  // setup ul.tabs to work as tabs for each div directly under div.panes
	  $("ul.ui-tab-items").tabs("div.ui-tab-content > div");
	  }
);*/
/*
$(
  function() {
	  // setup ul.tabs to work as tabs for each div directly under div.panes
	  $("ul.ui-tab-items").tabs("div.ui-tab-content > div", {effect: 'fade', fadeOutSpeed: 400});
	  }
);*/

/*$(
  function() {
	  // setup ul.tabs to work as tabs for each div directly under div.panes
	  $("ul.ui-tab-items").tabs("div.ui-tab-content > div", {event:'mouseover'});
	  }
);*/


/*$(
  function() {
 // get container for the wizard and initialize its exposing
    var wizard = $("#wizard").expose({color: '#789', lazy: true});
 
    // enable exposing on the wizard
    wizard.click(function() {
    $(this).expose().load();
  });
	 // enable tabs that are contained within the wizard
      $("ul.ui-tab-items", wizard).tabs("div.ui-tab-content > div", function(event, index) {
 
      /* now we are inside the onBeforeClick event */
 
      // ensure that the "terms" checkbox is checked.
/*      var terms = $("#terms");
      if (index > 0 && !terms.get(0).checked)  {
      terms.parent().addClass("error");
 
      // when false is returned, the user cannot advance to the next tab
      return false;
      }
 
      // everything is ok. remove possible red highlight from the terms
      terms.parent().removeClass("error");
      });
	  
	   // get handle to the tabs API
      var api = $("ul.ui-tab-items", wizard).data("tabs");
 
      // "next tab" button
      $("button.next", wizard).click(function() {
      api.next();
      });
 
      // "previous tab" button
      $("button.prev", wizard).click(function() {
      api.prev();
      });
  
   }
);*/

/*
$(
  function() {
	  // add new effect to the tabs
$.tools.tabs.addEffect("slide", function(i, done) {
 
    // 1. upon hiding, the active pane has a ruby background color
    this.getPanes().slideUp().css({backgroundColor: "#666666"});
 
    // 2. after a pane is revealed, its background is set to its
    // original color (transparent)
    this.getPanes().eq(i).slideDown(function()  {
	$(this).css({backgroundColor: 'transparent'});
 
	// the supplied callback must be called after the effect has
        // finished its job
	done.call();
    });
});
	  $("#accordion").tabs(
    "#accordion div.pane",
    {tabs: 'h2', effect: 'slide', initialIndex: null}
  );
  }
);
*/

/*$(
  function(){
	  $("#accordion").tabs("#accordion div", {
      tabs: 'img',
      effect: 'horizontal'
    });
  });*/
/*$(
  function(){
$(".slidetabs").tabs(".slidshow > a", {
	event:'mouseover',
 
    // start from the beginning after the last tab
    rotate: true
 
    // use the slideshow plugin. It accepts its own configuration
    }).slideshow();
$(".slidetabs").data("slideshow").play();//自动播放
  });*/

/*$(function(){
		   // create custom animation algorithm for jQuery called "bouncy"
    $.easing.bouncy = function (x, t, b, c, d) {
        var s = 1.70158;
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    }
 
    // create custom tooltip effect for jQuery Tooltip
    $.tools.tooltip.addEffect(
        "bouncy",
 
	// opening animation
	function(done) {
	    this.getTip().animate({top: '+=15'}, 500, 'bouncy', done).show();
	},
 
	// closing animation
	function(done) {
	    this.getTip().animate({top: '-=15'}, 500, 'bouncy', function()  {
		$(this).hide();
		done.call();
	    });
	}
    );
	$("#demo").tooltip({effect: 'bouncy'});
});*/
/*$(function(){
 $("#demo").tooltip({
          // use div.tooltip as our tooltip
          tip: '.ui-poptip',
 
          // use the fade effect instead of the default
          effect: 'fade',
 
          // make fadeOutSpeed similar to the browser's default
          fadeOutSpeed: 100,
 
          // the time before the tooltip is shown
          predelay: 400,
 
          // tweak the position
          position: "bottom right",
          offset: [-50, -80]
      });
  });*/
  
/*$(function(){  
  // setup tooltip for a single DIV element
    $("#mytable img").tooltip({
 
        // each trashcan image works as a trigger
        tip: '.ui-poptip',
 
        // custom positioning
        position: 'center right',
 
        // move tooltip a little bit to the right
        offset: [0, 15],
 
        // there is no delay when the mouse is moved away from the trigger
        delay: 0
    });
	 $("#mytable img").click(function() {
 
        // get handle to the current image (trashcan)
        var img = $(this);
 
        // gradually hide the parent row
        img.parents("tr").fadeOut(function()  {
 
            // after the row is deleted, hide our tooltip using the tooltip API
            img.data("tooltip").hide();
 
        });
 
    });
    
		   });*/


/*$(function(){
// initialize tooltip
$("#demo").tooltip({
 
   // tweak the position
   offset: [10, 2],
 
   // use the "slide" effect
   effect: 'slide'
 
// add dynamic plugin with optional configuration for bottom edge
}).dynamic({ bottom: {direction: 'down', bounce: true } });
		   });*/

/*
$(function(){

		    $("img[rel]").overlay({
								  effect: 'apple',
								   mask: '#333'});  
			});*/


/*$(function(){
		   //实现覆盖效果
		   var triggers = $(".modalInput").overlay({
 
      // some mask tweaks suitable for modal dialogs
      mask: {
        color: '#ebecff',
        loadSpeed: 200,
        opacity: 0.9
      },
 
      closeOnClick: false
  });
		   //yes or no 对话框效果
		    var buttons = $("#yesno button").click(function(e) {
 
      // get user input
      var yes = buttons.index(this) === 0;
 
      // do something with the answer
      triggers.eq(0).html("You clicked " + (yes ? "yes" : "no"));
  });
			
			//输入框对话框效果
			$("#prompt form").submit(function(e) {
 
      // close the overlay
      triggers.eq(1).overlay().close();
 
      // get user input
      var input = $("input", this).val();
 
      // do something with the answer
      triggers.eq(1).html(input);
 
      // do not submit the form
      return e.preventDefault();
  });
		   });*/


/*$(function(){
		    $("#yesno").overlay({
 
    // custom top position
    top: 260,
 
    // some mask tweaks suitable for facebox-looking dialogs
    mask: {
 
    // you might also consider a "transparent" color for the mask
    color: '#fff',
 
    // load mask a little faster
    loadSpeed: 200,
 
    // very transparent
    opacity: 0.5
    },
 
    // disable this for modal dialog-type of overlays
    closeOnClick: false,
 
    // load it immediately after the construction
    load: true
 
    });
			});*/



/*$(function() {
     positions for each overlay
    var positions = [
        [0, 530],
        [400, 20],
        [400, 530],
        [0, 20]
    ];
 
     setup triggers
    $("button[rel]").each(function(i) {
 
        $(this).overlay({
 
             common configuration for each overlay
            oneInstance: false,
            closeOnClick: false,
 
             setup custom finish position
            top: positions[i][0],
            left: positions[i][1],
 
             use apple effect
            effect: 'apple'
 
        });
    });
});*/


/*$(function() {
  // initialize scrollable
  $(".scrollable").scrollable({ 
							  vertical: true    //纵向滚动 （无.items div {float:left;}） 
							  });
});*/

/*$(function(){
$(".scrollable").scrollable({circular: true});
 
$(".items img").click(function() {
	// see if same thumb is being clicked
	if ($(this).hasClass("active")) { return; }
 
	// calclulate large image's URL based on the thumbnail URL (flickr specific)
	var url = $(this).attr("src").replace("_t", "");
 
	// get handle to element that wraps the image and make it semi-transparent
	var wrap = $("#image_wrap").fadeTo("medium", 0.5);
 
	// the large image from www.flickr.com
	var img = new Image();
 

	// call this function after it's loaded
	img.onload = function() {
 
		// make wrapper fully visible
		wrap.fadeTo("fast", 1);
 
		// change the image
		wrap.find("img").attr("src", url);
 
	};
 
	// begin loading the image from www.flickr.com
	img.src = url;
 
	// activate item
	$(".items img").removeClass("active");
	$(this).addClass("active");
 
// when page loads simulate a "click" on the first image
}).filter(":first").click();
		   });*/

/*$(function(){
 $(".scrollable").scrollable({ circular: true }).click(function() {
      $(this).data("scrollable").next();
      });
		   });*/
/*$(function(){$("#wizard").scrollable();})*/



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