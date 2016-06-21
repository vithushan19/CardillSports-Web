var http = require("http");
var https = require("https");
var fs = require('fs');

/**
 * getJSON:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */
var getJSON = function(options, onResult)
{
    console.log("rest::getJSON");

    var req = https.request(options, function(res)
    {
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            var obj = JSON.parse(output);
            onResult(res.statusCode, obj);
        });
    });

    req.on('error', function(err) {
        //res.send('error: ' + err.message);
    });

    req.end();
};

var getSampleData = function(callback) {
    function readData() {
        fs.readFile('server/data.json',
            'utf8', function (err, data) {            
                if (err) {                    
                    return callback(err);
                }
                var results = JSON.parse(data).data;                
                callback(results);
            });
    }

    readData();
};

module.exports.getJSON = getJSON;
module.exports.getSampleData = getSampleData;