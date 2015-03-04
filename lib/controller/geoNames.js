'use strict';


var Client = require('node-rest-client').Client;

var restClient = new Client();

//Define routes for GeoNames
/**
 * Call GeoNames API
 */
exports.getGeoNames = function (req, res) {
    invokeAndProcessGeoNameAPI(function(err, result){
            //Manipulate the Result.Go through the DOM.
            var resTemp = result.status.message;
            res.send('<h1>' +  resTemp + '</h1>');
    });
}
/**
 * Make a rest call to invoke GeoNames
 */
var invokeAndProcessGeoNameAPI =  function(callback){
    // direct way
    restClient.get("http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo", function (data, response) {
        callback(null,data);
    });
}