$(document).ready(function(){
      
          $("a").attr("href", "https://www.codefactory.wien");
          $("code").css("color","red");
          $("ol li").css("backgroundColor","#2a7b90");
          $("input").val("Express your opinion");
          $("img").attr('src',"https://www.codefactory.wien/wp-content/uploads/2018/03/codefactory-vienna-footer-h.png");
          $("blockquote").css({"backgroundColor":"orange","font-style":" italic"});
          $("h1").css("color","black");
          $("h1 span").css("color","white");
          $(".date").remove();
          var b = "<a><li>New Templates</li></a><a><li>Order Template</li></a><a><li>Contact Us</li></a>"
          $(".sidemenu").prepend(b);
          $("p:eq(1)").css("color","red").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");
    });