$("ul").on("click", "li",function(){
	$(this).toggleClass("selected");
});

$("ul").on("click","span",function(event){
		$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	var newTodo = $(this).val();
	if(event.which === 13){
		$(this).val("");
		$("ul").append("<li>"+"<span> <i class='fa fa-trash' aria-hidden='true'></i> </span>"+newTodo+"</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});