var React = require('react');
var InfluencersResultsProfile = require('./InfluencersResultsProfile.jsx');

var InfluencersResultsContent = React.createClass({

  render: function(){

    return(
      <div className = "container">
        <InfluencersResultsProfile />
        <InfluencersResultsProfile />
      </div>
    );
  }
});

module.exports = InfluencersResultsContent;
