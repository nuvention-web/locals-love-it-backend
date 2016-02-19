var React = require('react');
var classNames = require('classnames');

var Button = React.createClass({

  getInitialState: function(){
    return {active: false};
  },

  click(){
      this.setState({active: !this.state.active});
  },

  render: function(){
    var btnClass = classNames({
      'btn btn-info': true,
      'active': this.state.active
    });
    return (
      <button type="button" className = {btnClass} onClick = {this.click}>{this.props.name}</button>
    );
  }
});

var ButtonGroup = React.createClass({
  render: function(){

    var createListItem = function(optionName){
      return <Button key = {optionName} name = {optionName} />;
    };

    return(
      <div className = "row">
        <div className = "col-md-2">
          <h5> {this.props.title}</h5>
        </div>
        <div className = "col-md-8">
          <div className="btn-group" role="group" aria-label="...">
            {this.props.items.map(createListItem)}
            </div>
        </div>
    </div>
    );
  }
});

module.exports = ButtonGroup;
