$("form").submit(function(e) {

	e.preventDefault();
	
	
	

});

$(document).ready(function(){
        $("form label , form button").remove();

        var b = $('<div class="box">new1 div</div><div class="box">new 2 div</div><div class="box">new 3 div</div><div class="box">new 4 div</div><div class="box">new 5 div</div>');
         $('article').prepend(b);
          $("#msg").val("Search for...");
          $("p a").attr("href", "https://www.codefactory.wien");
    });





