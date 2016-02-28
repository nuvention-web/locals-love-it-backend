var InfluencersResultsRow = require('./InfluencersResultsProfile.js.jsx');

var InfluencersResultsContent = React.createClass({

  render: function(){

    var someTestInfluencers = [
      {
        name: "Spike",
        imageLink : "#",
        badges : ["Bashful"],
        industry: "Food",
        socialLinks : [
          {
            name: "Twitter",
            link: "http://twitter.com"
          },
          {
            name: "Facebook",
            link: "http://facebook.com"
          }
        ]
      },
      {
        name: "Harry",
        imageLink : "#",
        industry: "Sports",
        badges : ["Grumpy", "Sneezy"],
        socialLinks : [
          {
            name: "Twitter",
            link: "http://twitter.com"
          },
          {
            name: "Facebook",
            link: "http://facebook.com"
          }
        ]
      }
    ];

    return(
      <div className = "container">
        <InfluencersResultsRow influencers = {someTestInfluencers}/>
      </div>
    );
  }
});

module.exports = InfluencersResultsContent;
