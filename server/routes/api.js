var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var requestController = require('../controllers/requestController.js');
var PlayerRankingSchema = require('../models/PlayerRankingSchema');
var RedditSchema = require('../models/RedditSchema');


var PlayerRanking = mongoose.model('PlayerRanking', PlayerRankingSchema);
var Reddit = mongoose.model('Reddit', RedditSchema);

router.get('/rankings', function(req, res, next) {
    PlayerRanking.find(function(err, playerRanking){
        if(err){ return next(err); }
        res.json(playerRanking);
    });
});

router.post('/ranking', function(req, res, next) {

    var playerRanking = new PlayerRanking(req.body);	
    
    playerRanking.save(function(err, playerRanking){
        if(err){ return next(err); 
    }
    
    res.json(playerRanking);
    });
});


router.get('/reddit2', function(req, res, next) {  
        requestController.getSampleData(function(result) {        
            res.json(result);
        });
});

router.get('/reddit', function(req, res, next) {  

    var options = {
        host: 'www.reddit.com',
        path: '/r/nba/top.json?sort=top&t=month',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    requestController.getJSON(options, function(statusCode, result) {
        // I could work with the result html/json here.  I could also just return it
        console.log("onResult: (" + statusCode + ")" + JSON.stringify(result));
        res.statusCode = statusCode;
        res.json(result);
    });
});

module.exports = router;