var NavBar = React.createClass({
  render: function(){
    return (
      <div className = "navbar navbar-default navbar-fixed-top topNavBar">
        <div className = "container-fluid">
          <div className = "navbar-header">
            <a className = "navbar-brand" href = "#"><img src="http://s31.postimg.org/5efn0o6tz/LLI_logo_final_small.png" /></a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = NavBar;
