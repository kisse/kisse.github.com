$(function(){ //若要加载页面直接出现覆盖层，则选取覆盖层
		    $("img[rel]").overlay({
								   mask: {color: '#333',loadSpeed: 200,opacity: 0.9}});    /*灰色蒙版*/
			});