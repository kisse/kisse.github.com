$(function(){
// initialize tooltip
$("#demo2").tooltip({
 
   // tweak the position
       position: "top center",
          offset: [-30, -80],
 
   // use the "slide" effect
   effect: 'slide'
 
// add dynamic plugin with optional configuration for bottom edge
}).dynamic({ bottom: {direction: 'down', bounce: true } });
		   });