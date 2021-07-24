$(document).ready(function () {
    $("#image").click(function () {
        
        $(".design-image").slideDown('1500').hide('1000');
        $("#design").show('1500');
       
    });
    $("#image").click(function(){
        $(".development-image").slideDown('1500').hide('1000');
        $("#development").show('1500');
    });
    
});