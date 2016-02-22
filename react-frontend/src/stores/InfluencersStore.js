"use strict";
var alt = require('../alt.js');
var InfluencersActions = require('../actions/InfluencersActions.js');


//var FilterActions = require('../actions/FilterActions');

class InfluencersStore {

  constructor() {
    //parsedResponse = JSON.parse(API_response);
    this.influencers = [];
    this.errorMessage = null;

    //this.influencers_to_be_viewed = [];
    this.bindListeners({
    	handleUpdateInfluencers: InfluencersActions.UPDATE_INFLUENCERS,
    	handleInfluencersFailed: InfluencersActions.INFLUENCERS_FAILED,
  	});
	}

    handleUpdateInfluencers(influencers) {
      this.influencers = influencers;
    }

    handleInfluencersFailed(errorMessage) {
      this.errorMessage = errorMessage;
    }
}

module.exports = alt.createStore(InfluencersStore, 'InfluencersStore');
