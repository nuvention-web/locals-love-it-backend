var InfluencersResultsContent = require('./InfluencersResultsContent.js.jsx');
var InfluencersFilters = require('./InfluencersFilters.js.jsx');

var m_frequency = { "One-Time Shoutout":"One", "On-going relationship": "On-going"};
var m_promoType = { "Review":"Review", "Photo & Comment": "Photo&Comment", "Sale for Fans" : "Sale_ff"};
var m_personality = {"Quirky":"Quirky", "Witty":"Witty", "Bubbly":"Bubbly", "Sassy":"Sassy", "Conservative":"Conservative"};

var personality = []
var frequency = []
var promoType =[]

function getValuesArray(map){
  result = []
  for (item in map) {
    result.push(map[item])
  }
  return result
}

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
      a.splice(i, 1);
      return;
    }
  }
}

var InfluencersResults = React.createClass({

	getInitialState: function() {

		return {
        data:this.props.influencers
        /*frequency:[],
        personality:[],
        type_of_p:[]*/
      }
	},

  onClick: function(name, group){

    console.log("clicked Name: %s, Group: %s", name, group);

    if (group == "personality"){
      if (contains(personality, name)){
        remove(personality, name)
      }else{
        personality.push(name)
      }
    }else if (group == "frequency"){
      if (!contains(frequency, name)){
        if (frequency.length > 0){
          frequency.pop()
        }
        frequency.push(m_frequency[name])
      }
    }else if (group == "promoType"){
      if (contains(promoType, name)){
        remove(promoType, name)
      }else{
        promoType.push(m_promoType[name])
      }
    }
    this.filter_data()
  },

  filter_data: function(){
    tmp = []

    _personality = personality.slice()
    _frequency = frequency.slice()
    _promoType = promoType.slice()

    if (_personality.length == 0){
      _personality = getValuesArray(m_personality)
    }

    if (_frequency.length == 0){
      _frequency = getValuesArray(m_frequency)
    }

    if (_promoType.length == 0){
      _promoType = getValuesArray(m_promoType)
    }

    console.log("currently applied filters")
    console.log(_personality)
    console.log(_frequency)
    console.log(_promoType)

    for (i = 0; i< this.props.influencers.length;i++){

      if (contains(_personality, this.props.influencers[i].traits.personality) && contains(_frequency, this.props.influencers[i].traits.frequency) && contains(_promoType, this.props.influencers[i].traits.type_of_promotion)){
        tmp.push(this.props.influencers[i])
      }
    }

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
					<InfluencersFilters onClick={this.onClick}/>
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

module.exports = InfluencersResults;
