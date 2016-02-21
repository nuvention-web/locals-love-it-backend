var React = require('react');

var NavBar = require('./NavBar.jsx');
var InfluencersResults = require('./influencers/InfluencersResults.jsx');

var Index = React.createClass({

  render: function() {
    return (
      <div>
        <NavBar/>
        <InfluencersResults/>
      </div>
    );
  }
});

module.exports = Index;
