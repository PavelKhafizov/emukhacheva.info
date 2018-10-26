(function(){
    $(".nav-link").on("click", function(e){
    $(".nav-item").find(".active").removeClass("active");
    $(this).addClass("active");
 })})();