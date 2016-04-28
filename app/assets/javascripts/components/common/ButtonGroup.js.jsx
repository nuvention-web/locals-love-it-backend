var classNames = require('classnames');

var Button = React.createClass({

  getInitialState: function(){
    return {active: false};
  },
/*
  click(){
      this.setState({active: !this.state.active});
      console.log(this.props.key)
  },*/

  click: function(e){
    this.setState({active: !this.state.active});
    console.log(this.props.name)
  },

  render: function(){
    var btnClass = classNames({
      'btn btn-info': true,
      'active': this.state.active
    });
    return (
      <button type="button" className = {btnClass} onClick = {this.click}>{this.props.name}heaeraj</button>
    );
  }
});

var ButtonGroup = React.createClass({

  createListItem: function(option){
    return <Button key = {option} name = {option} />;
  },

  render: function(){

/*
    var createListItem = function(optionName){
      return <Button key = {optionName} name = {optionName} />;
    };*/

    return(
      <div className = "row">
        <div className = "col-md-4">
          <h5> {this.props.title}</h5>
        </div>
        <div className = "col-md-8">
          <div className="btn-group" role="group" aria-label="...">
            {this.props.items.map(this.createListItem)}
            debugger;
            </div>
        </div>
    </div>
    );
  }
});

module.exports = ButtonGroup;
