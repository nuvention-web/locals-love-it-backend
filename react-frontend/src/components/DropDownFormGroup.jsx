var React = require('react');

var ListItemWithLink = React.createClass({
  render: function(){
    return (
      <li><a href = "#">{this.props.option}</a></li>
    );
  }
});


var DropDownFormGroup = React.createClass({


  render: function(){

    var createListItem = function(optionName){
      return <ListItemWithLink key = {optionName} option = {optionName} />;
    };

    return(
      <div className = "row">
        <div className = "col-md-2">
          <h5> {this.props.title}</h5>
        </div>
        <div className = "col-md-8">
          <div className = "form-group">
            <div className = "input-group-btn">
              <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.props.title}<span className="caret"></span></button>
              <ul className="dropdown-menu">
                {this.props.items.map(createListItem)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DropDownFormGroup;
