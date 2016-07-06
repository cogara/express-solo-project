var express = require('express');

var router = express.Router();

router.get('/', function(request, response) {
  console.log('Got Rickt!');
  response.send('<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allowfullscreen></iframe>');
})

module.exports = router;
