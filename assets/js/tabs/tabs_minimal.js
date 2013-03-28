$(
  function() {
	  // setup ul.ui-tab-items to work as tabs for each div directly under div.ui-tab-content
	  $("ul.ui-tab-items").tabs("div.ui-tab-content > div");
	  }
);