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

function contains_multiple(a, obj){
  for (var p = 0; p < obj.length; p++){
    for (var i = 0; i < a.length; i++){
        if (a[i] === obj[p]){
            return true;
        }
    }
  }
  return false;
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

  onReset: function(){
    personality = []
    frequency = []
    promoType = []
    this.filter_data()
  },

  onClick: function(name, group){

    if (group == "personality"){
      if (contains(personality, name)){
        remove(personality, name)
      }else{
        personality.push(name)
      }
    }else if (group == "frequency"){
      console.log("frequency", frequency)
      console.log("name", name)
      if (!contains(frequency, name)){
        if (frequency.length > 0){
          frequency.pop()
        }
        else {
        frequency.push(m_frequency[name])
        }
      }
    }else if (group == "promoType"){
      console.log("promoType", promoType)
      console.log("name", name)
      if (contains(promoType, m_promoType[name])){
        console.log("Here")
        remove(promoType, m_promoType[name])
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

    console.log("_personality", _personality)
    console.log("_frequency", _frequency)
    console.log("_promoType", _promoType)


    var parseTraits = function(traits){
      var arr_traits = traits.split(",")
      for (j = 0; j < arr_traits.length; j++) {
      arr_traits[j] = arr_traits[j].trim()
      arr_traits[j] = arr_traits[j].charAt(0).toUpperCase() + arr_traits[j].slice(1);
      }
      return arr_traits
    };

    for (i = 0; i< this.props.influencers.length;i++){

      curr_traits = parseTraits(this.props.influencers[i].user.traits)

      if (contains_multiple(_personality, curr_traits) && contains(_frequency, this.props.influencers[i].traits.frequency) && contains(_promoType, this.props.influencers[i].traits.type_of_promotion)){
        tmp.push(this.props.influencers[i])
      }
    }
    console.log("tmp", tmp)
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
					<InfluencersFilters onClick={this.onClick} onReset={this.onReset}/>
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
