var NavBar = React.createClass({


  render: function(){
    var text = this.props.link == 'users/sign_in' ? 'Sign in' : 'Sign Out' ;
    
    return (
      <div className = "navbar navbar-default navbar-fixed-top" id = "nav">
        <div className = "container-fluid">
          <div className = "navbar-header">
            <a className = "navbar-brand" href = {this.props.link}><img src="http://s31.postimg.org/8zhj7as2f/LLI_logo_final_small.png" /></a>
          </div>
          <div className = "nav navbar-nav navbar-right">
            <a href = {this.props.link}><button type="button" className="btn btn-primary navbar-btn">{text}</button></a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = NavBar;
