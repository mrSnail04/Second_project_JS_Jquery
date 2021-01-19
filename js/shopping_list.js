$('ul').on('click','li', function() {
	$(this).toggleClass('done');
})
$('ul').on('click','span', function(event){
	event.stopPropagation();
	$(this).parent().fadeOut( function(){
		$(this).remove();
	});
})

$('input').keypress(function(event) {
	if(event.which === 13){

		var item = $(this).val();
		$(this).val('');
		$('ul').append('<li>'+ item +' <span><i class="far fa-times-circle"></i></span></li>');
	}
})

$('h2 span').click(function(){
	$('input').fadeToggle(1000);
})