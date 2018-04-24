(function ($) {
    $.fn.simple_spinner_input = function (opt)
    {
        var $$ = $(this);
        
        $$.find('.minus').click(function() {
            new_qty = 0;
            textbox_row = $$.find('input'),
                old_qty = parseInt(textbox_row.val());
            
            if(!isNaN(old_qty))
            {
                new_qty = old_qty-1;
                $$.find('input').val(new_qty);
            }else{
                $$.find('input').val(0);
            }
        });
        
        $$.find('.plus').click(function() {
            new_qty = 0;
            textbox_row = $$.find('input'),
                old_qty = parseInt(textbox_row.val());
            
            if(!isNaN(old_qty))
            {
                new_qty = old_qty+1;
                $$.find('input').val(new_qty);
            }else{
                $$.find('input').val(0);
            }
        });
    
    }
})(jQuery);
