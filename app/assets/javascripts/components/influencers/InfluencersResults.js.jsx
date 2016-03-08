var InfluencersResultsContent = require('./InfluencersResultsContent.js.jsx');
var InfluencersFilters = require('./InfluencersFilters.js.jsx');

var InfluencersResults = React.createClass({
  render: function() {
		if (this.props.errorMessage) {
			return (
				<div> this.state.errorMessage </div>
			);
		}
    mainContainerStyle = {
	height:"100%",
    };

    return (
      <div id = "mainContainer" className = "row" style = {mainContainerStyle}>
      			       <div className = "col-md-3">
			        <div className = "row">
				<div className = "col-md-10 col-md-offset-1">
				<InfluencersFilters />
				</div>
				</div>
				</div>
				<hr/>
				<div className = "col-md-9">
        <InfluencersResultsContent Influencers={this.props.influencers} />
                                </div>
	</div>
    );
  }
});

module.exports = InfluencersResults;
