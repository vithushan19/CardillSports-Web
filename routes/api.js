var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var PlayerRanking = mongoose.model('PlayerRanking');

router.get('/rankings', function(req, res, next) {
  PlayerRanking.find(function(err, playerRanking){
    if(err){ return next(err); }

    res.json(playerRanking);
  });
});

router.post('/ranking', function(req, res, next) {
  var playerRanking = new PlayerRanking(req.body);

  playerRanking.save(function(err, playerRanking){
    if(err){ return next(err); }

    res.json(playerRanking);
  });
});

module.exports = router;