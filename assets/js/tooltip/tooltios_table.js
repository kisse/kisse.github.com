$(function(){  
  // setup tooltip for a single DIV element ��ʾ��ʾ��
    $("#mytable img").tooltip({
 
        // custom positioning
        position: 'center right',
 
        // move tooltip a little bit to the right
        offset: [0, 15],
 
        // there is no delay when the mouse is moved away from the trigger
        delay: 0
    });
	//ɾ�����ѡ����
	 $("#mytable img").click(function() {
 
        // get handle to the current image (trashcan)
        var img = $(this);
 
        // gradually hide the parent row
        img.parents("tr").fadeOut(function()  {
 
            // after the row is deleted, hide our tooltip using the tooltip API
            img.data("tooltip").hide();
 
        });
 
    });
    
});