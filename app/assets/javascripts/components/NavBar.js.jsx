var NavBar = React.createClass({


  render: function(){
	  var signed_in = this.props.link == '/users/sign_in';
    var text = signed_in ? 'Sign in' : 'Sign Out';
    var text2 = 'Inbox';
		var is_influencer = this.props.is_influencer;
		var influencer_link = '/influencers/' + this.props.influencer_id + '/edit';

    return (
      <div className = "navbar navbar-default navbar-fixed-top" id = "nav">
        <div className = "container-fluid">
          <div className = "navbar-header">
            <a className = "navbar-brand" href = "/"><img src="http://s32.postimg.org/5ype92u4x/imageedit_2_3348609615.gif" /></a>
          </div>
          <div className = "nav navbar-nav navbar-right">
            <ul className="nav navbar-nav">
		          <li> <a href ={influencer_link}>
		            {(() => {
                  switch (is_influencer) {
                    case true:   return <button type="button" className="btn btn-primary navbar-btn">{'Edit Profile'}</button>
                    default:
                  }
      	        })()}
		          </a></li>

		          <li> <a href ='/users/edit'>
		            {(() => {
                  switch (signed_in) {
                    case false:   return <button type="button" className="btn btn-primary navbar-btn">{'Edit User Info'}</button>
                    default:
                  }
      	        })()}
		          </a></li>

		          <li> <a href ='/mailbox/inbox'>
		            {(() => {
                  switch (signed_in) {
                    case false:   return <button type="button" className="btn btn-primary navbar-btn">{text2}</button>
                    default:
                  }
      	        })()}
		          </a></li>


              <li> <a href = '/campaigns'>
                {(() => {
                  switch (signed_in) {
                    case false:   return <button type="button" className="btn btn-primary navbar-btn">Campaigns</button>
                    default:
                  }
                })()}
              </a></li>



              <li><a href = {this.props.link}><button type="button" className="btn btn-primary navbar-btn">{text}</button></a></li>
            </ul>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = NavBar;
