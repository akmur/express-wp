var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Get a cookie' });
});

router.get('/profile', function(req, res, next) {
  // get cookie value

  var cookie = req.cookies.userId;

  // if a cookie is Found
  if (cookie) {

    var formData = {
      cookie: cookie
    };

    // 2. Check with server to see if request is valid
    request.post({url:'http://localhost:3000/login/cookieCheck', formData: formData}, function callback(err, httpResponse, body) {
      if (err) {
        return console.error(err);
      }
      data = JSON.parse(body);
      // 3. retrieve the user details (userid, username)
      console.log(data.user);
    });


    // 4. check if an express user with the same userid exists
    // 5. if Not
      // 5a. Create a user
      // 5b. Save the userid (taken from cookie) within the new user
      // 5c. login the user
    // 5. else
      // find the user with the userId taken from cookie
      // login the user
  } else {
    // set user status to unauthorized
  }
});

router.post('/cookieCheck', function(req, res, next) {
  res.json({user: 'tobi'});
});

module.exports = router;
