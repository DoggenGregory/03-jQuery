var left = 0;
var down = 0;


$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        left = left - 10
        
        if (left <  -100){
            left = 1200;
        }
        $("#rect").css("margin-left",left+"px")
        break;

        case 38: // up
        down = down - 10
        if (down < -100){
            down = 700;
        }

        $("#rect").css("margin-top",down+"px")

        break;

        case 39: // right
        left = left + 10
        
        console.log(left)
        if (left  >  1200){
            left = 0;
        }
        $("#rect").css("margin-left",left+"px")

        break;

        case 40: // down
        down = down + 10
        console.log(down)
        if (down > 700){
            down = 0;
        }

        $("#rect").css("margin-top",down+"px")

        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});