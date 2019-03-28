// Write your solution here
var total = 0;
var jan  =0 ;

$("#plus").click(function(){
    jan = $("#input").val();
    total = $("#calc").html();
    console.log(typeof parseInt(total));
    total = parseInt(jan) + parseInt(total);
    console.log(typeof total);
    $("#calc").html(total);

    console.log(total);
    console.log(jan+"dzd");

})