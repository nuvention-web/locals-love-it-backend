(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/_stream_0.js":[function(require,module,exports){
var NavBar = React.createClass({
  displayName: "NavBar",

  render: function () {
    return React.createElement(
      "div",
      { className: "navbar navbar-default navbar-fixed-top" },
      React.createElement(
        "div",
        { className: "container-fluid" },
        React.createElement(
          "div",
          { className: "navbar-header" },
          React.createElement(
            "a",
            { className: "navbar-brand", href: "#" },
            " Locals Love It "
          )
        )
      )
    );
  }
});

module.exports = NavBar;

},{}]},{},["/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/_stream_0.js"]);
