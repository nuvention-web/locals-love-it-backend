var React = require('react');
var SearchResultsProfile = require('./SearchResultsProfile.jsx');

var SearchResultsContent = React.createClass({

  render: function(){

    return(
      <div className = "container">
        <SearchResultsProfile />
        <SearchResultsProfile />
      </div>
    );
  }
});

module.exports = SearchResultsContent;
