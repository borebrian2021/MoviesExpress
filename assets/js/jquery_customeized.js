$(document).ready(function(){
       
// alert('sdhfjklasdfgh');
1
2
3

});
$("#youtube").click(function() {
    $('#mPoster').fadeOut("slow");
    $('#youtube').attr('src', './assets/images/loadingGif.gif')

    setTimeout(() => {
        $('#video').fadeIn("slow");
        $('#youtube').attr('src', './assets/images/youtube.gif')
    
    
      }, "3000");
});
