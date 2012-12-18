var loved=function(){
	$('.btn-like').text("爱过");
	$('.btn-fav').text("爱过");
	$('.like').text("爱过");
	$('.btn-reshare').text("喜闻乐见");
	$('.btn-action-reply').text(function() {
		var numlen=$(this).text().indexOf("回应")
		if(numlen==0){
			return "来一发";
		}
		else{
			return $(this).text().substring(0,numlen)+"发";
		}
	});
}

loved();
