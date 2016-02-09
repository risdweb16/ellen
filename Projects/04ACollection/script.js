/*

$(document).ready(function() {
    $('button').click(function() {
        var type = $(this).val(),
            $button = $('a.button');

        switch (type) {
        case 'reset':
            $button.html('<span class="icon"></span>Labels');
            break;
        case 'jquery-replace':
            $button.text('Letters');
            break;
        case 'javascript-replace':
            $button[0].lastChild.replaceWholeText('Letters');
            break;
        }
    });
});




/*
$(document).ready(function(){
	$('div').fadeIn("slow");
});



jQuery.fn.extend(
{
    toggleText: function (a, b){
        var isClicked = false;
        var that = this;
        this.click(function (){
            if (isClicked) { that.text(a); isClicked = false; }
            else { that.text(b); isClicked = true; }
        });
        return this;
    }
});

$("#change").toggleText("Labels", "Type"); */