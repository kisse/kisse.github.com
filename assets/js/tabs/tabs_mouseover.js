$(
  function() {
	  // setup ul.tabs to work as tabs for each div directly under div.panes
	  $("ul.ui-tab-items2").tabs("div.ui-tab-content2 > div", {event:'mouseover'});
	  }
);