var InfluencersResultsContent = require('./InfluencersResultsContent.js.jsx');
var InfluencersFilters = require('./InfluencersFilters.js.jsx');

window.InfluencersResults = React.createClass({
  render: function() {
		if (this.props.errorMessage) {
			return (
				<div> this.state.errorMessage </div>
			);
		}
    mainContainerStyle = {
      marginTop: 70
    };

    return (
      <div id = "mainContainer" className = "container" style = {mainContainerStyle}>
				<InfluencersFilters/>
				<hr/>
        <InfluencersResultsContent />
      </div>
    );
  }
});