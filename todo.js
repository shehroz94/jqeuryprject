$("ul").on("mouseenter", "span", function(event){
    $(this).css("background" ,"red");
    event.stopPropagation();
})

$("ul").on("mouseleave", "span", function(event){
    $(this).css("background" ,"white");
    event.stopPropagation();
})

$("ul").on("click", "span", function(){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
})


$("ul").on("click", "li", function(){

    if($(this).css("color") == "rgb(0, 0, 0)")
    {
        $(this).css("textDecoration", "line-through")
        $(this).css("color", "gray")
    }
    else
    {
        $(this).css("textDecoration", "none")
        $(this).css("color", "black")
    }

})

$("input[type='text']").keypress(function(event){
    if(event.which == 13)
    {
        var txt = $(this).val();
        $("ul").append("<li><span>X</span> "+ txt +"</li>")
        $(this).val("");
    }
}) 
