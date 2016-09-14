var pageCounter = 1; //used for pagination

jQuery(document).ready(function($) {

  var loadMore = function(offset){
    var postsUrl = "http://alexmuraro.dev/wp-json/wp/v2/posts?filter[posts_per_page]=10";

    if ( undefined != offset && 0 != offset ) {
        var nextPosts = offset * 10;
        postsUrl += '&filter[offset]=' + nextPosts;
    }

    $.getJSON( postsUrl ).done( function(data) {
      var source   = $("#listing-template").html();
      var template = Handlebars.compile(source);
      var html = template({posts: data});
      $('#js-loadmore').text('Loading...');
      if (data.length < 10) {
          $('#js-loadmore').hide();
      } else {
          $('#js-loadmore').show();
      }
      $('.posts').append(html);
    } ).always( function() {
      $('#js-loadmore').text('Load more');
    } );
  };


  $('#js-loadmore').on('click', function() {
    pageCounter++;
    loadMore(pageCounter);
    $('#js-loadmore').text('Loading...');
  });
});
