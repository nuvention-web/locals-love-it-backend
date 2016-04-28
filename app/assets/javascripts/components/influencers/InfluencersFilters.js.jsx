var DropDownFormGroup = require('../common/DropDownFormGroup.js.jsx');
var ButtonGroup = require('../common/ButtonGroup.js.jsx');

var FormOption = React.createClass ({
  render: function(){
    return(
      <div className = "row">
      <div className = "col-md-12">
        <label>
          <input type= {this.props.type} name = {this.props.group} id = {this.props.group + this.props.option}/> {this.props.option}
        </label>
      </div>
      </div>
    );
  }
});

var FormGroup = React.createClass ({

  createFormOption: function(option){


    return <FormOption type = {this.props.type} key = {option} option = {option} group = {this.props.group} />;

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

  on_select: function(name) {
    this.props.onSelect(name)
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
          <FormGroup type = {"checkbox"} group = {"promoType"} title = {"Type of Promotion"} options ={["Review", "Photo & Comment", "Sale for Fans"]}/>
          <hr />

          <FormGroup type = {"radio"} group = {"frequency"} title = {"Frequency"} options ={["One-Time Shoutout", "On-going relationship"]}/>
          <hr />

          <FormGroup type = {"checkbox"} group = {"personality"} title = {"Personality"} options ={["Quirky", "Witty", "Bubbly", "Sassy", "Conservative"]}/>
          <hr />

          <ButtonGroup title = {"Personality"} items ={["Quirky", "Witty", "Bubbly", "Sassy", "Conservative"]} onSelect={this.on_select}/>
          <hr />


          <DropDownForm title = {"Budget"} group = {"budget"} options = {["$0-$10", "$10-$30", "$30-$50", "$50-$75", "$75-$100", "100+"]}/>
        </div>
      </div>
	  </div>
    );
  }
});


module.exports = InfluencersFilters;
