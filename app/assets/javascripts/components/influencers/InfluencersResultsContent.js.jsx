var InfluencersResultsRow = require('./InfluencersResultsProfile.js.jsx');

var InfluencersResultsContent = React.createClass({
  //var array = new Array();
  render: function(){
   //var someTestInfluencers = array(this.props.Influencers);

    return(
      <div className = "containerX">
        <InfluencersResultsRow influencers = {this.props.Influencers}/>
      </div>
    );
  }
});

module.exports = InfluencersResultsContent;
