$(document).ready(function() {
var showPic = function(x) {
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: x,
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).prependTo( "#images" );
        if ( i === 15 ) {
          return false;
        }
      });
  $('img').on('click', function(){
	  $(this).toggleClass('big');
  });	  
	  
    });
  }

  var x = "Krakow";
  showPic(x);

  $('#ser').on('click', function(){
    x = $('#tag').val();
	$('#images').html("");
    showPic(x);
  });
  
});
