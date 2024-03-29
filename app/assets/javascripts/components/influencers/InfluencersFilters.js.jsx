var DropDownFormGroup = require('../common/DropDownFormGroup.js.jsx');
var ButtonGroup = require('../common/ButtonGroup.js.jsx');

/*personality, promoType, frequency*/

var FormOption = React.createClass ({

  getInitialState: function() {
      return {
          on : false
        }
    },

  click: function(e){
    this.props.onClick(this.props.option, this.props.group)
    this.setState( {on : !this.state.on} )
  },

  reset: function(e){
    this.setState( {on : false} )
  },

  render: function(){

    return(
      <div className = "row">
      <div className = "col-md-12">
        <label>
          <input type= {this.props.type} name = {this.props.group} id = {this.props.group + this.props.option} onClick = {this.click} checked = {this.state.on}/> {this.props.option}
        </label>
      </div>
      </div>);
  }
})

var FormGroup = React.createClass ({

  onClick: function(name, group){
    this.props.onClick(name, group);
  },

  reset: function(e){
    var children = this.refs
    this.props.options.forEach(function(option) {
      children[option].reset()
    })
  },

  createFormOption: function(option){
    return <FormOption ref = {option} type = {this.props.type} key = {option} option = {option} group = {this.props.group} onClick = {this.onClick}/>;
  },

  render: function(){
    return(
      <form>
        <div className = "row">
          <div className = "col-md-12">
            <h5> {this.props.title}</h5>
          </div>
        </div>
        <div className = "row">
          <div className = "col-md-12">
            <div className={this.props.type}>
              {this.props.options.map(this.createFormOption)}
            </div>
          </div>
        </div>
      </form>
    );
  }
});


var DropDownOption = React.createClass({
  render: function(){
    return(
      <option>{this.props.name}</option>
    );
  }
});

var DropDownForm = React.createClass({
  createDropDownOption: function(option){
    return <DropDownOption name = {option} key = {option}/> ;
  },

  render: function(){
    return(
      <fieldset className="form-group">
        <label for = {this.props.group}> {this.props.title} </label>
          <select className="form-control" id="exampleSelect1">

            {this.props.options.map(this.createDropDownOption)}
          </select>
      </fieldset>
    );
  }
});

var InfluencersFilters = React.createClass({

  onClick: function(name, group) {
    this.props.onClick(name, group)
  },

  reset: function(e) {
    this.props.onReset()
    this.refs['promotype'].reset()
    this.refs['frequency'].reset()
    this.refs['personality'].reset()
  },

  render: function(){

    style = {
      marginTop: 100
    };

    return (
    <div className = "row" style = {style}>
      <div className = "panel panel-default">
        <div className = "panel-heading">
          <h4>Filters</h4>
        </div>
        <div className = "panel-body">
          <FormGroup type = {"checkbox"} ref = {"promotype"} group = {"promoType"} title = {"Type of Promotion"} options ={["Review", "Photo & Comment", "Sale for Fans"]} onClick = {this.onClick}/>
          <br />

          <FormGroup type = {"checkbox"} ref = {"frequency"} group = {"frequency"} title = {"Frequency"} options ={["One-Time Shoutout", "On-going relationship"]} onClick = {this.onClick}/>
          <br />

          <FormGroup type = {"checkbox"} ref = {"personality"} group = {"personality"} title = {"Personality"} options ={["Quirky", "Witty", "Bubbly", "Sassy", "Conservative"]} onClick = {this.onClick} />
          <br />

          <button type="button" onClick = {this.reset}>Reset</button>

        </div>
      </div>
	  </div>
    );
  }
});


module.exports = InfluencersFilters;
