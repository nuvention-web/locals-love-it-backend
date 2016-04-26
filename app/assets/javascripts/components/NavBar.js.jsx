var NavBar = React.createClass({

  getInitialState: function() { 
     return this.props.link == "/signin" ? {text:"Login"} : {text: "Logout"};
  },

  render: function(){
    return (
      <div className = "navbar navbar-default navbar-fixed-top topNavBar">
        <div className = "container">
          <div className = "navbar-header">
            <a className = "navbar-brand" href = {this.props.link}><img src="http://s31.postimg.org/8zhj7as2f/LLI_logo_final_small.png" /></a>
          </div>
          <div className = "nav navbar-nav navbar-right">
            <a href = "/signin"><button type="submit" className="btn btn-default">{this.state.text}</button></a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = NavBar;
