var NavBar = React.createClass({


  render: function(){
	  var signed_in = this.props.link == '/users/sign_in';
    var text = signed_in ? 'Sign in' : 'Sign Out';
    var text2 = 'Inbox';
		var is_influencer = this.props.is_influencer;

    return (
      <div className = "navbar navbar-default navbar-fixed-top" id = "nav">
        <div className = "container-fluid">
          <div className = "navbar-header">
            <a className = "navbar-brand" href = "/"><img src="http://s32.postimg.org/5ype92u4x/imageedit_2_3348609615.gif" /></a>
          </div>
          <div className = "nav navbar-nav navbar-right">
            <ul className="nav navbar-nav">

		            {(() => {
                  switch (is_influencer) {
                    case true:   return <li><a href ='/users/edit'>{'Edit Profile'}</a></li>
                    default:
                  }
      	        })()}


		            {(() => {
                  switch (signed_in) {
                    case false:   return <li><a href ='/users/edit'>{'Edit User Info'}</a></li>
                    default:
                  }
      	        })()}


		            {(() => {
                  switch (signed_in) {
                    case false:   return <li><a href ='/mailbox/inbox'>{text2}</a></li>
                    default:
                  }
      	        })()}


                {(() => {
                  switch (signed_in) {
                    case false:   return <li><a href = '/campaigns'>Campaigns</a></li>
                    default:
                  }
                })()}

              <li><a href = {this.props.link}>{text}</a></li>
            </ul>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = NavBar;
