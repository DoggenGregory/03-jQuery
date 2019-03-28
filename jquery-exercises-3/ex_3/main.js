// Write your solution here
var rand = Math.floor( (Math.random()*100)+1);

$("#test").click(function(){
    var  input = parseInt($('#input').val());
    console.log(input)

    if(rand < input){
        
        $("#greg").html("to high!!")
    }else if(rand > input){

        $("#greg").html("to low")

    }else{
        console.log("GREG")

        $("#greg").html("to perfect")

    }


})