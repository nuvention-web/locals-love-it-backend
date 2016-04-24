var NavBar = React.createClass({
  render: function(){
    return (
      <div className = "navbar navbar-default navbar-fixed-top topNavBar">
        <div className = "container">
          <div className = "navbar-header">
            <a className = "navbar-brand" href = "#"><img src="http://s31.postimg.org/8zhj7as2f/LLI_logo_final_small.png" /></a>
          </div>
          <div className = "nav navbar-nav navbar-right">
            <button type="submit" className="btn btn-default" href = "#">Login</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = NavBar;
