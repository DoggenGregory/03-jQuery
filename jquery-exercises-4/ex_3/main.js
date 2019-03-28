// Write your solution here


$("#name").keyup(function(){
    
        var olm = $("#name")

        if(olm.val() == "" ){
            
            olm.css("border","solid 2px red")
        }else{

            olm.css("border","solid 2px green")
        }


    
    
})

$("#fName").keyup(function(){
        var olm = $("#fName")

        if(olm.val() == ""){
            
            olm.css("border","solid 3px red")
        }else{

            olm.css("border","solid 3px green")
        }


    
})

$("#email").keyup(function(){
        var olm = $("#email");
        var iets = emailcheck(); 
        console.log(iets)
        
        if (iets == false) {
            
            olm.css("border","solid 3px red")
        }else{

            olm.css("border","solid 3px green")
        }

 
    
})
$("#phone").keyup(function(){
        var olm = $("#phone");
        var ietsanders = phonecheck();
        console.log(ietsanders)
        
        if ( ietsanders === false) {
            
            olm.css("border","solid 3px red")
        }else{

            olm.css("border","solid 3px green")
        }

 
    
})
function emailcheck(){
    var email = $('#email').val()
    //console.log(email)
    var emailReg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if(!emailReg.test(email) || email == ''){
    return false;
}
}
function phonecheck(){
    var phone = $('#phone').val(),
    intRegex = /[0-9 -()+]+$/;
if((phone.length < 9) || (!intRegex.test(phone)))
{
     return false;
}
}
/* function validateEmail(sEmail) {
    var filter = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
    if (filter.test(sEmail)) {
    return true;
    }
    else {
    return false;
    }
}  
function validPHONE(x) {
    var patt = new RegExp("0");
    var res = patt.test(x);
    if (res == true){
        return true;
    }else{
        return false
    }
  } */