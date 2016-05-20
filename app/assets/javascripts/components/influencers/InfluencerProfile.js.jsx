var PricingResult = React.createClass({
  render: function(){


    return(
      <div className = "row">
        <div className = "col-md-10">
          <div className = "input-group">
            <input type="text" className="form-control" id="Price" placeholder={this.props.value} />
            <div className="input-group-addon">{this.props.name}</div>
          </div>
        </div>
      </div>
    );
  }
});

var PricingContainer = React.createClass ({
  getInitialState: function() {
      return {
        price: 0,
        posts: 0,
        impressions: 0
      };
  },


 addPost: function(e){
   this.setState({
     price: (this.state.posts+1) * (this.props.numFollowers*5/1000),
     posts: this.state.posts + 1,
     impressions: (this.state.posts+1) * this.props.numFollowers*.8

   });
 },

 decreasePost: function(e){
   if (this.state.posts == 0) {
	return this.state;
   };
   this.setState({
     price: (this.state.posts -1) * (this.props.numFollowers*5/1000),
     posts: this.state.posts - 1,
     impressions: (this.state.posts-1) * this.props.numFollowers*.8

   });
 },


  render: function(){
    var NoPadLeft = {
      paddingLeft: 0,
    };


    var style = {

	margin: 0
    };

    return(
      <div>
      <h4> Pricing </h4>
        <div className = "row">
          <div className = "col-md-3 col-md-offset-1">
            <div className = "form-group">
              <br />
              <div className="input-group">
                <div className="input-group-addon">Posts</div>
                <input type="text" id="posts" className="form-control" id="Posts" placeholder={this.state.posts}/>
              </div>
            </div>
          </div>
          <div className = "col-md-2" style = {NoPadLeft}>
            <div className="btn-group btn-group-vertical">
              <button style= {style} className="btn btn-info" onClick = {this.addPost} > + </button>
              <button style= {style} className="btn btn-info" onClick = {this.decreasePost}> - </button>
            </div>
          </div>
          <div className = "col-md-6">
            <PricingResult name = {'$'} value = {this.state.price} />
            <PricingResult name = {'Impressions'} value = {this.state.impressions} />
          </div>
      </div>
    </div>
    );
  }
});

var BadgeList = React.createClass({
  render: function(){

    var badgeStyle = {

      background: "#4FBBDB",
      marginRight: 2
    }

    var createBadge = function(tagName){
      return <span style = {badgeStyle} className = "badge">{tagName}</span> ;
    };

    return(
      <div> {this.props.tags.map(createBadge)} </div>
    );
  }

});


var Star = React.createClass({
  getInitialState: function() {
    console.log(this.props.full);
    if (this.props.full == 'true'){
        var classn = "glyphicon glyphicon-star";
    } else {
      var classn = "glyphicon glyphicon-star-empty";
    }
    return { class: classn};
  },

    render: function(){
      return(
        <span className = {this.state.class} aria-hidden = "true"></span>
      );
    }
});

var Review = React.createClass ({
  getInitialState: function() {
    var StarArray = Array(5).fill('true');

    for(i = 0; i < 5; i++){
      if (this.props.stars < i) {
        StarArray[i] = 'false';
        console.log(StarArray[i]);
      }
    }
    return {StarArray: StarArray}
  },

  render: function(){

    var createStar = function(isFull){
        return <Star full = {isFull}/>
    };

    return(
      <div>
      <div className = "row">
        <div className = "col-md-4">
          {this.state.StarArray.map(createStar)}
        </div>
        <div className = "col-md-8">
          {this.props.text}
        </div>
      </div>
      <div className = "row">
        <div className = "col-md-10 col-md-offset-1">
          <hr />
        </div>
      </div>
      </div>

    );

  }

});

var ReviewList = React.createClass({
  render:function(){

    var createReview = function(review){
      return <Review stars ={review.stars} text = {review.text} />;
    };

    return(
      <div>
        <h4>Reviews</h4>
        {this.props.reviews.map(createReview)}
      </div>
    );
  }
});

var ProfileSidebar = React.createClass({
  render: function(){
    var tempReviews = [
      {
        stars: 5,
        text: "This influencer is the best!"
      },
      {
        stars: 4,
        text: "This influencer rocks! They're so super cool and I would work with them again!"
      }
    ];

    var colStyle ={
      marginTop: 10
    };

    return(
      <div className = "col-md-6" style = {colStyle}>
        <div className="panel panel-default" >
          <div className="panel-body">
            <div className = "row">
              <div className = "col-md-10"><h3> {this.props.name} </h3></div>
              <div className = "col-md-2"><SocialMedIcon numFollowers = {this.props.numFollowers}/></div>
            </div>
            <hr />
            <div> {this.props.bio} </div>
            <br />
            <BadgeList tags = {this.props.tags}/>
            <hr />
            <PricingContainer numFollowers = {this.props.numFollowers} />
            <hr />
            <ReviewList reviews = {tempReviews}/>
          </div>
        </div>
      </div>
    );
  }
});

var SocialMedIcon = React.createClass({
  render: function(){
    return (
      <div className = "col-md-2">
        <div className = "row">
          <img height="30" width="30" src = "https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" className = "img-responsive" />
        </div>
        <div className = "row">
          {this.props.numFollowers}
        </div>
      </div>
    );
  }
});

var Profile = React.createClass({
render: function(){


  var contentStyle = {
    border: "solid",
    borderColor: "#ED005F",
    borderRadius: 5,
    marginTop: 70
  };

  var colStyle ={
    marginTop: 10
  };

  var imageStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  };

  var imageStyle2 = {
    padding: 10
  };

  return (
    <div style = {contentStyle} className = "container contentContainer">
      <div className = "row">
        <ProfileSidebar name = {this.props.influencer.user.first_name} numFollowers = {this.props.influencer.social_media_info.twitter_followers} bio = {this.props.influencer.short_bio} tags = {["Bubbly", "Quirky", "Funny"]}/>
        <div className = "col-md-6" style = {colStyle}>
          <div className="panel panel-default" >
            <div className="panel-body">
              <div className = "row">
                <img style = {imageStyle} src={this.props.influencer.social_media_info.profile_pic.scheme + "://" + this.props.influencer.social_media_info.profile_pic.host + this.props.influencer.social_media_info.profile_pic.path} className="img-responsive" />
              </div>
              <div className = "row">
                <div className = "col-md-2 col-md-offset-3" style = {colStyle}>
                  <a href = {this.props.messageLink} ><input className="btn btn-info btn-lg" type="submit" value="Message Influencer!" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<div className = "row">
        <div className = "col-md-12">
          <div className = "panel panel-default">
            <div className = "panel-heading"> <h3>Campaign Results </h3> </div>
            <div className = "panel-body">
              <img style = {imageStyle2} className = "img-responsive" src = {"http://s24.postimg.org/unj2geec5/temp.png"} />
            </div>
          </div>
        </div>
      </div>*/}
    </div>
  );
}
});

module.exports = Profile;
