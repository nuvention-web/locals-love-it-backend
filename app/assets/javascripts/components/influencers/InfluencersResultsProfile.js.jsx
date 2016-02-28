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
        {this.props.links.map(createListItem)}
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
    }
    return(
      <div className = "col-md-3">
        <div className="panel panel-default">
          <div className="panel-body" style = {panelStyle}>
            <a href = "profile.html"><img src={this.props.imageLink} className="img-responsive"/></a>
          </div>
          <div className="panel-footer">

            <a href = "profile.html" style = {nameStyle}><h3>{this.props.name}</h3></a>
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

    var createInfluencerProfile = function(inf, index){
      return <InfluencersResultsProfile
				key = {index}
        name = {inf.name}
        imageLink = {inf.imageLink}
        badges = {inf.badges}
        socialLinks = {inf.socialLinks}
        industry = {inf.industry}

      />;
    };

    return (
      <div className = "row">
        {this.props.influencers.map(createInfluencerProfile)}
      </div>
    );
  }

});

module.exports = InfluencersResultsRow;
