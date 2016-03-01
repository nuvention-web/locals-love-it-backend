(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ProfileSidebar = React.createClass({
  displayName: "ProfileSidebar",

  render: function () {

    var colStyle = {
      marginTop: 10
    };

    return React.createElement(
      "div",
      { className: "col-md-4", style: colStyle },
      React.createElement(
        "div",
        { className: "panel panel-default" },
        React.createElement(
          "div",
          { className: "panel-body" },
          React.createElement(
            "h3",
            null,
            this.props.name
          )
        )
      )
    );
  }
});

var Profile = React.createClass({
  displayName: "Profile",

  render: function () {

    var contentStyle = {
      border: "solid",
      borderColor: "#ED005F",
      borderRadius: 5,
      marginTop: 70
    };

    return React.createElement(
      "div",
      { style: contentStyle, className: "container contentContainer" },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(ProfileSidebar, { name: JSON.stringify(this.props.influencer) })
      )
    );
  }

});

module.exports = Profile;

},{}]},{},[1]);
