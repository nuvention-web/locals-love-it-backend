(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/_stream_0.js":[function(require,module,exports){
var BadgeList = React.createClass({
  displayName: "BadgeList",

  render: function () {

    var createBadge = function (tagName, index) {
      return React.createElement(
        "span",
        { className: "badge", key: index },
        tagName
      );
    };

    return React.createElement(
      "div",
      null,
      " ",
      this.props.tags.map(createBadge),
      " "
    );
  }

});

var ListOfLinks = React.createClass({
  displayName: "ListOfLinks",

  render: function () {
    var createListItem = function (linkSet, index) {
      return React.createElement(
        "li",
        { key: index },
        React.createElement(
          "a",
          { href: linkSet.link },
          " ",
          linkSet.name,
          " "
        )
      );
    };

    return React.createElement("ul", null);
  }

});

var InfluencersResultsProfile = React.createClass({
  displayName: "InfluencersResultsProfile",

  render: function () {
    var panelStyle = {
      padding: 0
    };

    var nameStyle = {
      textDecoration: "none",
      textAlign: "center"
    };
    var smi = this.props.imageLink;
    var photoToView = smi.scheme + '://' + smi.host + smi.path;
    var influencer_page = '/influencers/' + this.props.influencer_id;
    return React.createElement(
      "div",
      { className: "col-md-3" },
      React.createElement(
        "div",
        { className: "panel panel-default" },
        React.createElement(
          "div",
          { className: "panel-body", style: panelStyle },
          React.createElement(
            "a",
            { href: influencer_page },
            React.createElement("img", { src: photoToView, className: "img-responsive" })
          )
        ),
        React.createElement(
          "div",
          { className: "panel-footer" },
          React.createElement(
            "a",
            { href: influencer_page, style: nameStyle },
            React.createElement(
              "h3",
              null,
              this.props.first_name
            )
          ),
          React.createElement(
            "h5",
            { style: nameStyle },
            this.props.industry
          ),
          React.createElement(ListOfLinks, { links: this.props.socialLinks }),
          React.createElement(BadgeList, { tags: this.props.badges })
        )
      )
    );
  }
});

var InfluencersResultsRow = React.createClass({
  displayName: "InfluencersResultsRow",

  render: function () {

    var InfluencerInfo = this.props.influencers;
    var createInfluencerProfile = function (inf, index) {
      return React.createElement(InfluencersResultsProfile, {
        key: index,
        influencer_id: inf.user.id,
        first_name: inf.user.first_name,
        imageLink: inf.social_media_info.profile_pic,
        badges: ["Grumpy", "Sneezy"],
        socialLinks: inf.socialLinks,
        industry: inf.industries[0].name

      });
    };

    return React.createElement(
      "div",
      { className: "row" },
      InfluencerInfo.map(createInfluencerProfile)
    );
  }

});

module.exports = InfluencersResultsRow;

},{}]},{},["/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/_stream_0.js"]);
