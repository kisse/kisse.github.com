// JavaScript Document
 $(function(){
			
	$(".slidetabs").tabs(".banner > .b", {
 event:'mouseover',
    // enable "cross-fading" effect
    effect: 'fade',
    fadeOutSpeed: 1000,
 
    // start from the beginning after the last tab
    rotate: true
 
    // use the slideshow plugin. It accepts its own configuration
    }).slideshow({
		clickable:false});
				
				
				});
 
 
 
 $(function(){
 $.fn.smartFloat = function() { var position = function(element) { var top = element.position().top; //��ǰԪ�ض���element����������ϱ�Ե�ľ��� 
var pos = element.css("position"); //��ǰԪ�ؾ���ҳ��document�����ľ��� 
$(window).scroll(function() { //��������ʱ
						  var scrolls = $(this).scrollTop(); if (scrolls > 283) { //���������ҳ�泬���˵�ǰԪ��element�����ҳ�涥���ĸ߶� 
						  if (window.XMLHttpRequest) { //�������ie6 
						  element.css({ //����css 
									  position: "fixed", //�̶���λ,�����ٸ������
									  top:80 , //����ҳ�涥��Ϊ0 
									  }).addClass("shadow"); //������Ӱ��ʽ.shadow 
						  } else { //�����ie6 
						  element.css({ top: scrolls //��ҳ�涥������ 
									  }); } }else { element.css({ //�����ǰԪ��elementδ������������ϱ�Ե����ʹ��Ĭ����ʽ 
									  position: pos, 
                    top: top }).removeClass("shadow");//�Ƴ���Ӱ��ʽ.shadow 
						  } }); }; return $(this).each(function() { position($(this)); }); };


 $(".listbox").smartFloat(); 

 
 });