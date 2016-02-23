var INFLUENCER_ENDPOINT = require('../constants/api_endpoints.js').INFLUENCERS;
var request = require('superagent');

var InfluencersSource = {
  getInfluencers: function () {
    return new Promise(function (resolve, reject) {
      request
        .get(INFLUENCER_ENDPOINT)
        .set('Accept', 'application/json')
        .end(function (err, res) {
          err ? reject(err) : resolve(res);
        });
    });
  },
};

module.exports = InfluencersSource;
