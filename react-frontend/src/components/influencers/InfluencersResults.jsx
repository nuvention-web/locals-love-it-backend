var React = require('react');

//var InfluencersFilters = require('./InfluencersFilters.jsx');
var InfluencersResultsContent = require('./InfluencersResultsContent.jsx');
var InfluencersStore = require('../../stores/InfluencersStore.js');
var InfluencersActions = require('../../actions/InfluencersActions.js');

var InfluencersResults = React.createClass({

  render: function() {

    mainContainerStyle = {
      marginTop: 70
    };

    return (
      <div id = "mainContainer" className = "container" style = {mainContainerStyle}>
        <InfluencersFilters />
      <hr/>
        <InfluencersResultsContent />
      </div>
    );
  }
});



module.exports = InfluencersResults;
