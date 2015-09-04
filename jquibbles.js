$( document ).ready( readyFn );

function readyFn( jQuery ) {
    console.log( "ready!" );
    //alert("Hello World");
    $('.slideoutBox').click( expand );
    //$('#workXP').click( expand );
    $('main').hide();
    $('.showbutton').click(showDocument);
}

function expand () {   
    console.log("Expand");
    $(this).toggleClass("expanded");
}

function showDocument() {
    $('.showbutton').fadeOut(1000);
    $('main').delay(1000).fadeIn('slow');
    
}