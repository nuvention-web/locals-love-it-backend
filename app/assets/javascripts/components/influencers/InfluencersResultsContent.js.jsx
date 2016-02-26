var InfluencersResultsProfile = require('./InfluencersResultsProfile.js.jsx');

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
