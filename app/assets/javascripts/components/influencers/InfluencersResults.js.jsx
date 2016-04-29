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

function remove(a, obj) {
  for (var i = 0; i < a.length; i++){
    if (a[i] == obj) {
      personality.splice(i, 1);
      return;
    }
  }
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

    if (contains(personality, name)){
      console.log(personality)
      remove(personality, name)
      console.log(personality)
    }else{
      personality.push(name)
    }
    this.filter_data()
  },

  filter_data: function(){

    tmp = []
    console.log(tmp)
    for (i = 0; i< this.props.influencers.length;i++){
      if (contains(personality, this.props.influencers[i].traits.personality)){
        tmp.push(this.props.influencers[i])
      }
    }
    console.log(personality)
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
