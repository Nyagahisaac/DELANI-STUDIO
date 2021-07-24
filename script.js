$(document).ready(function () {
    $("#image1").click(function () {
        
        $(".design-image").slideDown('1500').hide('1000');
        $("#design").show('1500');
       
    });
    $("#image2").click(function(){
        $(".development-image").slideDown('1500').hide('1000');
        $("#development").show('1500');
    });
    $("#image3").click(function(){
        $(".product-image").slideDown('1500').hide('1000');
        $("#product").show('1500');
    });
    $("#design").click(function(){
        $("#design").slideUp();
        $(".design-image").show();
    });
    $("#development").click(function(){
        $("#development").slideUp();
        $(".development-image").show();
    });
    $("#product").click(function(){
        $("#product").slideUp();
        $(".product-image").show();
    });
    
});