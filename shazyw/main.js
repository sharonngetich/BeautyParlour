$(document).ready(function (){

    $("#range-slider").on("input change", function(){
        $(".text").css("font-size" , $(this).val()+ "px");
        //span value change
        $(".value").text($(this).val()+"px");
    })
})