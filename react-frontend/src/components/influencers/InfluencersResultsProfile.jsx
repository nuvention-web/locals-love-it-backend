var React = require('react');

var InfluencersResultsProfile = React.createClass({

  render: function(){

    var rowStyle = {
      borderStyle: "solid",
      borderColor: "grey",
      borderWidth: 1,
      margin: 5
    };

    var colStyle = {
      padding: 0
    };

    return(
      <div className = "row" style = {rowStyle}>
        <div className = "col-md-3" style = {colStyle}>
          <img src="./dog.jpg"/>
        </div>

        <div className = "col-md-9">
          Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content
        </div>
      </div>
    );
  }
});

module.exports = InfluencersResultsProfile;
