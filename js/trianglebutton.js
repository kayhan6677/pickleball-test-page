$(document).on("click","#triangle", function(){
    var displayState = $(".extended").css("display");
    var newdisplayState;
    if( displayState == "none") {
        newdisplayState = "flex";
        $("#other_info").css("top", "478px");
        $("#triangle").css("top", "480px");
        $("#triangle").css("transform", "rotate(180deg)");
        $(".row:nth-child(7)").css("height", "40px");
        $(".row:nth-child(11)").css("height", "50px"); 
    } else {
        newdisplayState = "none";
        $("#other_info").css("top", "318px");
        $("#triangle").css("top", "320px");
        $("#triangle").css("transform", "rotate(0deg)");
        $(".row:nth-child(7)").css("height", "50px");
        $(".row:nth-child(11)").css("height", "40px");
    }
    $(".extended").css("display", newdisplayState);
});











