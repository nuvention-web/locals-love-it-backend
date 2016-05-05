var DropDownFormGroup = require('../common/DropDownFormGroup.js.jsx');
var ButtonGroup = require('../common/ButtonGroup.js.jsx');

/*personality, promoType, frequency*/

var FormOption = React.createClass ({

  getInitialState: function() {
      return {
          reset : this.props.reset
        }
    },

  click: function(e){
    this.props.onClick(this.props.option, this.props.group)
    this.setState( {reset : !this.state.rest})

  },

  render: function(){
    console.log(this.state.reset)
      if (this.state.reset == true) {
        return(
        <div className = "row">
        <div className = "col-md-12">
          <label>
            <input type= {this.props.type} name = {this.props.group} id = {this.props.group + this.props.option} onClick = {this.click} checked = {!this.state.reset}/> {this.props.option}
          </label>
        </div>
        </div>);
      } else {
        return(
        <div className = "row">
        <div className = "col-md-12">
          <label>
            <input type= {this.props.type} name = {this.props.group} id = {this.props.group + this.props.option} onClick = {this.click}/> {this.props.option}
          </label>
        </div>
        </div>);
      }
  }
});

var FormGroup = React.createClass ({

  onClick: function(name, group){
    this.props.onClick(name, group);
  },

  createFormOption: function(option){
    return <FormOption type = {this.props.type} key = {option} option = {option} group = {this.props.group} onClick = {this.onClick} reset = {this.props.reset} />;

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

  getInitialState: function() {
    return {
      reset : true
    }
  },

  onClick: function(name, group) {
    this.props.onClick(name, group)
    this.setState({reset : false})
  },

  reset: function(e) {
    this.props.onReset()
    this.setState({reset : true})
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
          <FormGroup type = {"checkbox"} group = {"promoType"} title = {"Type of Promotion"} options ={["Review", "Photo & Comment", "Sale for Fans"]} reset={this.state.reset}  onClick = {this.onClick}/>
          <br />

          <FormGroup type = {"radio"} group = {"frequency"} title = {"Frequency"} options ={["One-Time Shoutout", "On-going relationship"]} onClick = {this.onClick} reset={this.state.reset} />
          <br />

          <FormGroup type = {"checkbox"} group = {"personality"} title = {"Personality"} options ={["Quirky", "Witty", "Bubbly", "Sassy", "Conservative"]} onClick = {this.onClick} reset={this.state.reset} />
          <br />

          <button type="button" onClick = {this.reset}>Reset</button>

        </div>
      </div>
	  </div>
    );
  }
});


module.exports = InfluencersFilters;
