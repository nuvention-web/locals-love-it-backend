var React = require('react');

var NavBar = require('./NavBar.jsx');
var SearchResults = require('./SearchResults.jsx');

var Index = React.createClass({

  render: function() {
    return (
      <div>
        <NavBar/>
        <SearchResults/>
      </div>
    );
  }
});

module.exports = Index;
