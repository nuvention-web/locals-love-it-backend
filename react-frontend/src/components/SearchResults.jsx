var React = require('react');

var SearchFilters = require('./SearchFilters.jsx');
var SearchResultsContent = require('./SearchResultsContent.jsx');
var SearchResults = React.createClass({

  render: function() {

    mainContainerStyle = {
      marginTop: 70
    };

    return (
      <div id = "mainContainer" className = "container" style = {mainContainerStyle}>
        <SearchFilters />
      <hr/>
        <SearchResultsContent />
      </div>
    );
  }
});



module.exports = SearchResults;
