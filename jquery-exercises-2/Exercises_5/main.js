// Write your solution here
$("#name , #first_name").focus(function(){
    $(this).css("border","green solid 3px");})

$("#name,#first_name").focusout(function(){
    $(this).find($(this).css("border","red solid 3px"))
})

