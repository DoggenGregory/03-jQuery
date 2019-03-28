// Write your solution here
let name , fName , date , place, job , company = "";


$("#button").click(function(){
      
    name = $("#name").val();
    Fname = $("#Fname").val();
    date = $("#date").val();
    place = $("#place").val();
    job = $("#job").val();
    company = $("#company").val();
    
    $("#output").html(`${name} ${Fname} is born on ${date} in ${place} and is current working as ${job} for the company ${company}` ) ;
})