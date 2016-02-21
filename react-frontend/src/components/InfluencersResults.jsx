var React = require('react');

var InfuencersFilters = require('./InfuencersFilters.jsx');
var InfuencersResultsContent = require('./InfuencersResultsContent.jsx');
var InfuencersResults = React.createClass({

  render: function() {

    mainContainerStyle = {
      marginTop: 70
    };

    return (
      <div id = "mainContainer" className = "container" style = {mainContainerStyle}>
        <InfuencersFilters />
      <hr/>
        <InfuencersResultsContent />
      </div>
    );
  }
});



module.exports = InfuencersResults;
