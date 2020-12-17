$(document).ready(function() {


// $('button').click(function () {
//    // highlight the button
//    // not AJAX, just cool looking
//    $("button").removeClass("selected");
//    $(this).addClass("selected");
//
//    // the AJAX part
//    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
//    var animal = $(this).text();
//    var flickrOptions = {
//      tags: animal,
//      format: "json"
//    };
//    function displayPhotos(data) {
//      var photoHTML = '<ul>';
//      $.each(data.items,function(i,photo) {
//        photoHTML += '<li class="grid-25 tablet-grid-50">';
//        photoHTML += '<a href="' + photo.link + '" class="image">';
//        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
//      }); // end each
//      photoHTML += '</ul>';
//      $('#photos').html(photoHTML);
//    }
//    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
//
//  }); // end click

  $('form').submit(function (evt) {
    evt.preventDefault();
    
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $('#search').val();
    console.log(animal);
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
    
    function displayPhotos(data) {
      var photoHTML = '';

      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each

      $('#photos').html(photoHTML);
      $('#search').val() = '';
     
      
      
    }; //end  DISPLAYPHOTOS 
    
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
    
    
    
    
  }); //end FORM SUBMIT FUNCTION
  
  
  
  
}); // end ready

