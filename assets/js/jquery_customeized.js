let HEIGHT=0;
let WIDTH=0;

$(document).ready(function(){
       
// alert('sdhfjklasdfgh');
1
2
3

});
//DISPLAYING THE YOUTUBE CARD
$("#youtube").click(function() {
    $('#mPoster').fadeOut("slow");
    $('#youtube').attr('src', './assets/images/loadingGif.gif')

    setTimeout(() => {
        $('#video').fadeIn("slow");
        $('#youtube').attr('src', './assets/images/youtube.png')
    
    
      }, "3000");
});
$("#loveBig").click(function() {
    $(".loveBig").animate({left: '250px'});
});


//ENLARGE LOVE
$("#makeLove").click(function() {

$(".loveBig").attr('position','relative');
$(".loveBig").attr('height','130px');

$(".loveBig").animate({
    //   left: '250px',
      opacity: '0.5',
      height: $('.loveBig').height("+=10"),
      width: $('.loveBig').width("+=10")
    });
});
$("#back").click(function() {

  $('#cardsHolder_').fadeIn("slow");
  $('#movieSection').fadeIn();
  $('#movieDetails').fadeOut();
   

});
$("#searchButton").click(function(){
    searchRecords($('#search').val());
    // alert();
  });