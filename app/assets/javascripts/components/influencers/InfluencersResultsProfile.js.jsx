var BadgeList = React.createClass({
  render: function(){

    var createBadge = function(tagName, index){
      return <span className = "badge" key={index} >{tagName}</span> ;
    };

    return(
      <div> {this.props.tags.map(createBadge)} </div>
    );
  }

});

var ListOfLinks = React.createClass({
  render: function(){
    var createListItem = function(linkSet, index){
      return <li key={index}><a href = {linkSet.link}> {linkSet.name} </a></li>
    };

    return (
      <ul>
      </ul>
    );
  }

});

var InfluencersResultsProfile = React.createClass({
  render: function(){
    var panelStyle = {
      padding: 0,
    }

    var nameStyle = {
      textDecoration: "none",
      textAlign: "center"
    };
   var smi=this.props.imageLink;
   var photoToView=smi.scheme+'://'+smi.host+smi.path
	 var influencer_page = '/influencers/' + this.props.influencer_id
    return(
      <div className = "col-md-3">
        <div className="panel panel-default">
          <div className="panel-body" style = {panelStyle}>
            <a href = {influencer_page}><img src={photoToView} className="img-responsive"/></a>
          </div>
          <div className="panel-footer">

            <a href = {influencer_page} style = {nameStyle}><h3>{this.props.first_name}</h3></a>
            <h5 style = {nameStyle}>{this.props.industry}</h5>
            <ListOfLinks links = {this.props.socialLinks} />
            <BadgeList tags = {this.props.badges} />

          </div>
        </div>
      </div>
    );
  }
});

var InfluencersResultsRow = React.createClass({
  render: function(){

   var InfluencerInfo = this.props.influencers;
    var createInfluencerProfile = function(inf, index){
      return <InfluencersResultsProfile
				key = {index}
				influencer_id = {inf.user.id}
        first_name = {inf.user.first_name}
				imageLink = {inf.social_media_info.profile_pic}
        badges = {["Grumpy", "Sneezy"]}
        socialLinks = {inf.socialLinks}
        industry = {inf.industries[0].name}

      />;
    };

    return (
      <div className = "row">
        {InfluencerInfo.map(createInfluencerProfile)}
      </div>
    );
  }

});

module.exports = InfluencersResultsRow;
