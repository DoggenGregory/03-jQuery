var bold= 0;
var under = 0;

$(document).ready(function(){
    /* On click: Enlarge the font (120%) */
    $("#instructions :nth-child(1)").click(function(){
        $("#content").css("font-size","1.2em")})
    
    /* On click: Decrease the font size (80%) */
    $("#instructions :nth-child(2)").click(function(){
        $("#content").css("font-size","0.8em")})
    
    
    /* On click: Bold or normalize the green words */
    
    $("#instructions :nth-child(3)").click(function(){
    if(bold == 0){
        bold++;
        $(".green").css("font-weight","bold")

    }else{
        bold=0;
        $(".green").css("font-weight","normal")}
    
    })

    
    /* On click: Bold or normalize the green words */
    $("#instructions :nth-child(4)").click(function(){
        if(under == 0){
            under ++;
            $(".red").css("text-decoration","underline")
        }else{
            under = 0;
            $(".red").css("text-decoration","none")}
        })

    
    /* On click: Replace the logo with another image */
    $("#instructions :nth-child(5)").hover(function(){
        $("img").attr("src","images/koala.jpg")
    },function(){
        $("img").attr("src","images/jquery-logo.png")
    })
    
    /* On hover: Display the URL of links in a tooltip when hovering over links */
    
    $("a").mouseover(function(){
        $(this).attr('title', $(this).attr("href"));

    })
    
    
    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */
    $("#instructions :nth-child(7)").click(function(){
        $("h2:nth-child(2)").before("<h2>chapter1!</h2>");
        $("p:nth-child(5)").before("<h2>chapter2!</h2>");

    })

});