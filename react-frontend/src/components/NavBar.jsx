var React = require('react');

var NavBar = React.createClass({
  render: function(){
    return (
      <div className = "navbar navbar-default navbar-fixed-top">
        <div className = "container-fluid">
          <div className = "navbar-header">
            <a className = "navbar-brand" href = "#"> Locals Love It </a>
          </div>
        </div>
      </div>

    );
  }
});

module.exports = NavBar;
