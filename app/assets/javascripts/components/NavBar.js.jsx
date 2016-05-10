var NavBar = React.createClass({


  render: function(){
    var text = this.props.link == '/users/sign_in' ? 'Sign in' : 'Sign Out' ;
    
    return (
      <div className = "navbar navbar-default navbar-fixed-top" id = "nav">
        <div className = "container-fluid">
          <div className = "navbar-header">
            <a className = "navbar-brand" href = "/"><img src="http://s32.postimg.org/5ype92u4x/imageedit_2_3348609615.gif" /></a>
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
