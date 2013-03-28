$(
  function() {
	  // setup ul.tabs to work as tabs for each div directly under div.panes
	  $("ul.ui-tab-items").tabs("div.ui-tab-content > div", {event:'mouseover'});
	  }
);