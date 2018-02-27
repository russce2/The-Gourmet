$(document).ready(function(){
    
    
    $(".menu-toggle").on("click", function(){
        $("header nav").toggleClass("move");
    });
    
    
    
    
    var map = new GMaps({
        div: '.maps',
        lat: 33.7676338,
        lng: -84.5606895,
        zoom: 10
      });
    
    
    
    
    map.addMarker({
        lat: 33.7676338,
        lng: -84.5606895,
        title: 'Atlanta, GA',
        infoWindow: {
  content: '<p style = "font-size: 16px;">The Gourmet</p><img style = "border-radius: 10px; margin: 0px;" src = "content/images/resize/sohel-patel-369165-min.jpg"/>'
}
        }
);
    

    
    /*  Animations  */
    
   
    $("#welcome").waypoint(function(direction){
        $("#welcome").addClass("animated fadeIn");
    }, {
        offset: "50%"
            });
    
    
    
    
    $("#about").waypoint(function(direction){
        $("header nav").addClass("dark");
    }, {
        offset: "50%"
            });
    
    
    
    
    $("#welcome").waypoint(function(direction){
        $("header nav").removeClass("dark");
            });
    
    
    
    
    $("#about #bio").waypoint(function(direction){
        $("#about #bio").addClass("animated fadeIn");
    }, {
        offset: "50%"
            });
    
    
    
    
    $("#services").waypoint(function(direction){
        $("#services").addClass("animated fadeIn");
    }, {
        offset: "50%"
            });
    
    
    
    
    $("footer #contact").waypoint(function(direction){
        $("footer #contact").addClass("animated slideInUp");
    }, {
        offset: "50%"
            });
    
    
    
    
    /*  Back-to-Top Button  */
    
    
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 700) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    });
    
    
    
    
});