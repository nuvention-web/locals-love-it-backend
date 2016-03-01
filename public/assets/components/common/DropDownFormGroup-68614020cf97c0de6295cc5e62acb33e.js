(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/common/_stream_0.js":[function(require,module,exports){
var ListItemWithLink = React.createClass({
  displayName: "ListItemWithLink",

  render: function () {
    return React.createElement(
      "li",
      null,
      React.createElement(
        "a",
        { href: "#" },
        this.props.option
      )
    );
  }
});

var DropDownFormGroup = React.createClass({
  displayName: "DropDownFormGroup",

  render: function () {

    var createListItem = function (optionName) {
      return React.createElement(ListItemWithLink, { key: optionName, option: optionName });
    };

    return React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-md-2" },
        React.createElement(
          "h5",
          null,
          " ",
          this.props.title
        )
      ),
      React.createElement(
        "div",
        { className: "col-md-8" },
        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement(
            "div",
            { className: "input-group-btn" },
            React.createElement(
              "button",
              { type: "button", className: "btn btn-info dropdown-toggle", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
              this.props.title,
              React.createElement("span", { className: "caret" })
            ),
            React.createElement(
              "ul",
              { className: "dropdown-menu" },
              this.props.items.map(createListItem)
            )
          )
        )
      )
    );
  }
});

module.exports = DropDownFormGroup;

},{}]},{},["/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/common/_stream_0.js"]);
