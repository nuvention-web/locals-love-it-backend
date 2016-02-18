var React = require('react');

var NavBar = React.createClass({
  render: function(){
    return (
      <div className = "navbar navbar-default navbar-fixed-top">
        <div className = "container-fluid">
          <div className = "navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className = "navbar-brand" href = {this.props.links['home']}> Locals Love It </a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
            	<li><a href={this.props.links['dashboard']}>Dashboard</a></li>
            	<li><a href={this.props.links['inbox']}>Inbox <span className="badge" id = "InboxNotifications">{this.props.messageNum}</span></a></li>
            	<li className="dropdown">
           		<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Profile<span class="caret"></span></a>
            		<ul className="dropdown-menu">
              		<li><a href={this.props.links['history']}>History</a></li>
              		<li><a href={this.props.links['settings']}>Settings</a></li>
              		<li role="separator" class="divider"></li>
              		<li><a href={this.props.links['logout']}>Logout</a></li>
            		</ul>
          </li>
            </ul>
            <form className="navbar-form navbar-right">
              <input type="text" className="form-control" placeholder="Search..."></input>
            </form>
          </div>
        </div>
      </div>

    );
  }
});

module.exports = NavBar;
