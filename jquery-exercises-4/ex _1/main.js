// Write your solution here

var playerAnser = "";
var iaAnser = "";
var score = 0;
var scoreIA = 0;


$("#rock").hide();
$("#paper").hide();
$("#scissors").hide();


$("#play").click(function(){
    $("#play").hide();
    letTheGameBegin();
})

function letTheGameBegin(){
    var rand = Math.floor(Math.random()*3)
    if (rand == 0){
        iaAnser = "rock";
    }else if(rand == 1){
        iaAnser = "scissors";
    }else{
        iaAnser = "paper";
    }

    $("#rock").show();
    $("#paper").show();
    $("#scissors").show();

    setTimeout(function(){
        $("#rock").hide();
        $("#paper").hide();
        $("#scissors").hide();
        result();
    },2000)

}
$("#rock").click(function(){
     playerAnser = "rock";   
})

$("#scissors").click(function(){
    playerAnser = "scissors";   
})

$("#paper").click(function(){
    playerAnser = "paper" ; 
})



function result(){
    console.log(iaAnser)
    if (playerAnser == "") {
        score -= 1;
        greg("to SLOW your score goes down")
///////////////////////////////paper statment/////////////////////////////
    }else if (playerAnser == "paper"){
        
        if(iaAnser == "scissors"){
            scoreIA += 1
            greg("ia anser was SCISSORS you LOSE");

        }else if(iaAnser == "rock"){
            score += 1
            greg("ia anser was ROCK you WIN");

        }else{
            greg("ia anser was also PAPER");
        }
   ///////////////////rock statment/////////////////////////////     
    }else if (playerAnser == "rock"){

        if(iaAnser == "paper"){
            scoreIA += 1;
            greg("ia anser was PAPER you LOSE");

        }else if(iaAnser == "scissors"){
            score += 1;
            greg("ia anser was SCISSORS you WIN");

        }else{
            greg("ia anser was also ROCK");
        }

//////////////////scissors statment/////////////////////////////////
    }else if (playerAnser == "scissors"){

        if(iaAnser == "rock"){
            scoreIA += 1;
            greg("ia anser was ROCK you LOSE");

        }else if(iaAnser == "paper"){
            score += 1;
            greg("ia anser was PAPER you WIN");

        }else{
            greg("ia anser was also SCISSORS");
        }



    }
}
function greg(anser){
    setTimeout(function(){
        
        $("#score").html("your score "+score + "  <br>      ia score "+scoreIA)

        },2500)
        $("#score").html(anser);
        $("#play").show();
        playerAnser = "";

}
