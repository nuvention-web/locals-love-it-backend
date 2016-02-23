var React = require('react');
var AltContainer = require('alt/AltContainer');

var InfluencersFilters = require('./InfluencersFilters.jsx');
var InfluencersResultsContent = require('./InfluencersResultsContent.jsx');
var InfluencersStore = require('../../stores/InfluencersStore.js');
var InfluencersActions = require('../../actions/InfluencersActions.js');

var InfluencersList = React.createClass({
	render: function() {
		return (
				<ul>
					{this.props.influencers.map((influencer, i) => {
						return (
							<li>{influencer} </li>
						);
					})}
				</ul>
		);
	}
});

var InfluencersResults = React.createClass({

	componentDidMount: function() {
		InfluencersStore.listen(this.onChange);

		InfluencersActions.getInfluencers();
	},

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
			<AltContainer store={InfluencersStore}>
				<InfluencersList />
				</AltContainer>
        <InfluencersFilters />
      <hr/>
        <InfluencersResultsContent />
      </div>
    );
  }
});



module.exports = InfluencersResults;
