$( document ).ready( readyFn );

function readyFn( jQuery ) {
    console.log( "ready!" );
    //alert("Hello World");
    $('.slideoutBox').click( expand );
    //$('#workXP').click( expand );
}

function expand () {   
    console.log("Expand");
    $(this).toggleClass("expanded");
}
