// Write your solution here
var x = 0;

$("#button1").click(function() {
    if (x >= 100){
        x = 10;

    }else{
        
        x = x + 10;
    }
    console.log(x)
    $("#rect").css("height",x+"px")

})

$("#button2").click(function(){
    $("#rect").css("background-color","green")

})
$("#button3").click(function(){
    $("#rect").css("background-color","red")

})
$("#button4").click(function(){
    $("#rect").hide()

})
$("#button5").click(function(){
    $("#rect").show()

})