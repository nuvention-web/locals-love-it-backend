var React = require('react');
var NavBar = require('./NavBar.jsx');

var Index = React.createClass({

  render: function () {
    return (
      <div>
        <NavBar/>
				{this.props.children}
      </div>
    );
  },
});

module.exports = Index;
