$(function(){
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
		   });