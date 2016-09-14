var express = require('express');
var router = express.Router();
var WP = require( 'wpapi' );
var wp = new WP({ endpoint: 'http://alexmuraro.dev/wp-json' });

/* GET home page. */
router.get('/', function(req, res, next) {
  wp.posts().then(function( data ) {
    res.render('templates/posts/all', { posts: data });
  }).catch(function( err ) {
    console.log(err);
  });
});

router.get('/:postSlug', function(req, res, next) {
  var postSlug = req.params.postSlug; // getting postSlug prom url params
  wp.posts().slug(postSlug).then(function( data ) {
      res.render('templates/posts/single', { post: data[0] });
  }).catch(function( err ) {
      console.log(err);
  });
});

module.exports = router;
