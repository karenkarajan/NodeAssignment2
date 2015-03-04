'use strict';





module.exports = function(app) {
    //Routes for GeoNames.
    var geoNames = require('../controller/geoNames');
    //Get Method to restify the geoname api call
    app.get('/api/geoNames', geoNames.getGeoNames);

}