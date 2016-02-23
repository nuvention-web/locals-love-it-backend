"use strict";
var alt = require('../alt');
var InfluencersSource = require('../sources/InfluencersSource.js');

class InfluencersActions {
  getInfluencers() {
    return (dispatch) => {
      dispatch();
      InfluencersSource.getInfluencers()
        .then((influencers) => {
          this.updateInfluencers(influencers);
        })
        .catch((errorMessage) => {
          this.influencersFailed(errorMessage);
        });
    }
  }

  updateInfluencers(influencers) {
    return influencers;
  }
  

  influencersFailed(errorMessage) {
    return errorMessage;
  }
}

module.exports = alt.createActions(InfluencersActions);
