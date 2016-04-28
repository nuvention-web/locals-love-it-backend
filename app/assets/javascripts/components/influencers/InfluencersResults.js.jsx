var InfluencersResultsContent = require('./InfluencersResultsContent.js.jsx');
var InfluencersFilters = require('./InfluencersFilters.js.jsx');

var personality = []

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

var InfluencersResults = React.createClass({

	getInitialState: function() {

		return {
        data:this.props.influencers,
        frequency:[],
				personality:[],
				type_of_p:[]}
	},

  on_select: function(name){
    console.log("on_select")
    console.log(name)
    console.log(this.state.personality)
    personality.push(name)
    this.filter_data()
  },

  filter_data: function(){
    console.log(personality)
    console.log(this.props.influencers)
    tmp = []
    console.log(tmp)
    for (i = 0; i< this.props.influencers.length;i++){
      console.log(personality[0])
      console.log("WHAT")
      console.log(this.props.influencers[i].traits.personality)
      if (contains(personality, this.props.influencers[i].traits.personality)){
        tmp.push(this.props.influencers[i])
      }
    }
    console.log(tmp)
    this.setState({data: tmp});
  },

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
      	 <div className = "col-md-3 col-lg-3">
		     <div className = "row">
				<div className = "col-md-10 col-md-offset-1">
					<InfluencersFilters onSelect={this.on_select}/>
				 </div>
			 </div>
   		 </div>
		<hr/>
		<div className = "col-md-9 col-lg-9">
			<InfluencersResultsContent Influencers={this.state.data}/>
    </div>
	 </div>
    );
  }
});

/*window.on_select = function(name) {InfluencersResults.on_select(name)};*/
/*window.on_select = InfluencersResults.on_select*/
/*exports.on_select = InfluencersResults.on_select;*/
module.exports = InfluencersResults;
