var doulist_rate=function() { 
	$('.doulist_item div a').each(function(){
		var url=$(this)
		url.after("<span class='rating_num'></span>");
		$.ajax({
        		type: "GET",
        		url: this.href,
        		headers: {
          			"Content-Type": "text/html"
        		},
			success: function(response){
				var rating_num;
        			rating_num = $(".rating_num", response).text();
        			url.siblings(".rating_num").html(rating_num);
      			}
	
		})
	});
}
	
doulist_rate()
