// Write your solution here
var salary = 0;
var Expenses = "";
var Insurance = "";
var Contributions = "";
var total = "";

$("#Expenses").html("the Expenses = "+Expenses);
$("#Insurance").html("the Insurance = "+Insurance);
$("#Contributions").html("the Contributions ="+Contributions);
$("#total").html("the total left = "+total);


$("#calc").click(function(){
    if($("select#gender option:checked").val() == 2){
/////////////////////////vrouw////////////////////////////////////////////////////

            if ($("#children").val()>2){
                calculation(2,1);

            }else if($("#children").val()>3){
                calculation(2,2);

            }else{
                calculation(2,0);

            }
        
    }else{
////////////////////////////man////////////////////////////////////////////////
            if ($("#children").val()>2){
                calculation(0,1);

            }else if($("#children").val()>3){
                calculation(0,2);

            }else{
                calculation(0,0);

            }

                }
})



function calculation(a,b){
    salary = $("#salary").val();
    Expenses =  salary /100 * (18-a-b) ; 
    Insurance = salary /100 *( 7-a-b) ;
    Contributions = salary /100 * (5-a-b);
    total = salary-Expenses-Insurance-Contributions;

    $("#Expenses").html("the Expenses = "+Expenses);
    $("#Insurance").html("the Insurance = "+Insurance);
    $("#Contributions").html("the Contributions ="+Contributions);
    $("#total").html("the total left = "+total);

}