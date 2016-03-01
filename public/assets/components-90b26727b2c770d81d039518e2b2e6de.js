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
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/common/_stream_0.js":[function(require,module,exports){
var classNames = require('classnames');

var Button = React.createClass({
  displayName: 'Button',

  getInitialState: function () {
    return { active: false };
  },

  click: function () {
    this.setState({ active: !this.state.active });
  },

  render: function () {
    var btnClass = classNames({
      'btn btn-info': true,
      'active': this.state.active
    });
    return React.createElement(
      'button',
      { type: 'button', className: btnClass, onClick: this.click },
      this.props.name
    );
  }
});

var ButtonGroup = React.createClass({
  displayName: 'ButtonGroup',

  render: function () {

    var createListItem = function (optionName) {
      return React.createElement(Button, { key: optionName, name: optionName });
    };

    return React.createElement(
      'div',
      { className: 'row' },
      React.createElement(
        'div',
        { className: 'col-md-2' },
        React.createElement(
          'h5',
          null,
          ' ',
          this.props.title
        )
      ),
      React.createElement(
        'div',
        { className: 'col-md-8' },
        React.createElement(
          'div',
          { className: 'btn-group', role: 'group', 'aria-label': '...' },
          this.props.items.map(createListItem)
        )
      )
    );
  }
});

module.exports = ButtonGroup;

},{"classnames":"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/node_modules/classnames/index.js"}],"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/node_modules/classnames/index.js":[function(require,module,exports){
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}]},{},["/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/common/_stream_0.js"]);
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
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/_stream_0.js":[function(require,module,exports){
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

},{}]},{},["/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/_stream_0.js"]);
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/common/ButtonGroup.js.jsx":[function(require,module,exports){
var classNames = require('classnames');

var Button = React.createClass({displayName: "Button",

  getInitialState: function(){
    return {active: false};
  },

  click(){
      this.setState({active: !this.state.active});
  },

  render: function(){
    var btnClass = classNames({
      'btn btn-info': true,
      'active': this.state.active
    });
    return (
      React.createElement("button", {type: "button", className: btnClass, onClick: this.click}, this.props.name)
    );
  }
});

var ButtonGroup = React.createClass({displayName: "ButtonGroup",
  render: function(){

    var createListItem = function(optionName){
      return React.createElement(Button, {key: optionName, name: optionName});
    };

    return(
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-md-2"}, 
          React.createElement("h5", null, " ", this.props.title)
        ), 
        React.createElement("div", {className: "col-md-8"}, 
          React.createElement("div", {className: "btn-group", role: "group", "aria-label": "..."}, 
            this.props.items.map(createListItem)
            )
        )
    )
    );
  }
});

module.exports = ButtonGroup;


},{"classnames":"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/node_modules/classnames/index.js"}],"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/common/DropDownFormGroup.js.jsx":[function(require,module,exports){
var ListItemWithLink = React.createClass({displayName: "ListItemWithLink",
  render: function(){
    return (
      React.createElement("li", null, React.createElement("a", {href: "#"}, this.props.option))
    );
  }
});


var DropDownFormGroup = React.createClass({displayName: "DropDownFormGroup",


  render: function(){

    var createListItem = function(optionName){
      return React.createElement(ListItemWithLink, {key: optionName, option: optionName});
    };

    return(
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-md-2"}, 
          React.createElement("h5", null, " ", this.props.title)
        ), 
        React.createElement("div", {className: "col-md-8"}, 
          React.createElement("div", {className: "form-group"}, 
            React.createElement("div", {className: "input-group-btn"}, 
              React.createElement("button", {type: "button", className: "btn btn-info dropdown-toggle", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false"}, this.props.title, React.createElement("span", {className: "caret"})), 
              React.createElement("ul", {className: "dropdown-menu"}, 
                this.props.items.map(createListItem)
              )
            )
          )
        )
      )
    );
  }
});

module.exports = DropDownFormGroup;


},{}],"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/_stream_0.js":[function(require,module,exports){
var DropDownFormGroup = require('../common/DropDownFormGroup.js.jsx');
var ButtonGroup = require('../common/ButtonGroup.js.jsx');

var InfluencersFilters = React.createClass({
    displayName: 'InfluencersFilters',

    render: function () {
        return React.createElement(
            'div',
            { className: 'row' },
            React.createElement(ButtonGroup, { title: "Type of Promotion ", items: ["Review", "Photo & Comment", "Sale for Fans"] }),
            React.createElement('hr', null),
            React.createElement(ButtonGroup, { title: "Frequency ", items: ["One-Time Shoutout", "On-going relationship"] }),
            React.createElement('hr', null),
            React.createElement(ButtonGroup, { title: "Personality ", items: ["Quirky", "Witty", "Bubbly", "Sassy", "Conservative"] }),
            React.createElement('hr', null),
            React.createElement(DropDownFormGroup, { title: "Budget", items: ["$0-$10", "$10-$30", "$30-$50", "$50-$75", "$75-$100", "$100+"] })
        );
    }
});

module.exports = InfluencersFilters;

},{"../common/ButtonGroup.js.jsx":"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/common/ButtonGroup.js.jsx","../common/DropDownFormGroup.js.jsx":"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/common/DropDownFormGroup.js.jsx"}],"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/node_modules/classnames/index.js":[function(require,module,exports){
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}]},{},["/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/_stream_0.js"]);
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/common/ButtonGroup.js.jsx":[function(require,module,exports){
var classNames = require('classnames');

var Button = React.createClass({displayName: "Button",

  getInitialState: function(){
    return {active: false};
  },

  click(){
      this.setState({active: !this.state.active});
  },

  render: function(){
    var btnClass = classNames({
      'btn btn-info': true,
      'active': this.state.active
    });
    return (
      React.createElement("button", {type: "button", className: btnClass, onClick: this.click}, this.props.name)
    );
  }
});

var ButtonGroup = React.createClass({displayName: "ButtonGroup",
  render: function(){

    var createListItem = function(optionName){
      return React.createElement(Button, {key: optionName, name: optionName});
    };

    return(
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-md-2"}, 
          React.createElement("h5", null, " ", this.props.title)
        ), 
        React.createElement("div", {className: "col-md-8"}, 
          React.createElement("div", {className: "btn-group", role: "group", "aria-label": "..."}, 
            this.props.items.map(createListItem)
            )
        )
    )
    );
  }
});

module.exports = ButtonGroup;


},{"classnames":"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/node_modules/classnames/index.js"}],"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/common/DropDownFormGroup.js.jsx":[function(require,module,exports){
var ListItemWithLink = React.createClass({displayName: "ListItemWithLink",
  render: function(){
    return (
      React.createElement("li", null, React.createElement("a", {href: "#"}, this.props.option))
    );
  }
});


var DropDownFormGroup = React.createClass({displayName: "DropDownFormGroup",


  render: function(){

    var createListItem = function(optionName){
      return React.createElement(ListItemWithLink, {key: optionName, option: optionName});
    };

    return(
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-md-2"}, 
          React.createElement("h5", null, " ", this.props.title)
        ), 
        React.createElement("div", {className: "col-md-8"}, 
          React.createElement("div", {className: "form-group"}, 
            React.createElement("div", {className: "input-group-btn"}, 
              React.createElement("button", {type: "button", className: "btn btn-info dropdown-toggle", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false"}, this.props.title, React.createElement("span", {className: "caret"})), 
              React.createElement("ul", {className: "dropdown-menu"}, 
                this.props.items.map(createListItem)
              )
            )
          )
        )
      )
    );
  }
});

module.exports = DropDownFormGroup;


},{}],"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/InfluencersFilters.js.jsx":[function(require,module,exports){
var DropDownFormGroup = require('../common/DropDownFormGroup.js.jsx');
var ButtonGroup = require('../common/ButtonGroup.js.jsx');

var InfluencersFilters = React.createClass({displayName: "InfluencersFilters",
  render: function(){
    return (

        React.createElement("div", {className: "row"}, 
            React.createElement(ButtonGroup, {title: "Type of Promotion ", items: ["Review", "Photo & Comment", "Sale for Fans"]}), 
            React.createElement("hr", null), 
            React.createElement(ButtonGroup, {title: "Frequency ", items: ["One-Time Shoutout", "On-going relationship"]}), 
            React.createElement("hr", null), 
            React.createElement(ButtonGroup, {title: "Personality ", items: ["Quirky", "Witty", "Bubbly", "Sassy", "Conservative"]}), 
            React.createElement("hr", null), 
            React.createElement(DropDownFormGroup, {title: "Budget", items: ["$0-$10", "$10-$30", "$30-$50", "$50-$75", "$75-$100", "$100+"]})
        )
    );
  }
});


module.exports = InfluencersFilters;


},{"../common/ButtonGroup.js.jsx":"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/common/ButtonGroup.js.jsx","../common/DropDownFormGroup.js.jsx":"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/common/DropDownFormGroup.js.jsx"}],"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/InfluencersResultsContent.js.jsx":[function(require,module,exports){
var InfluencersResultsRow = require('./InfluencersResultsProfile.js.jsx');

var InfluencersResultsContent = React.createClass({displayName: "InfluencersResultsContent",
  //var array = new Array();
  render: function(){
   //var someTestInfluencers = array(this.props.Influencers);

    return(
      React.createElement("div", {className: "container"}, 
        React.createElement(InfluencersResultsRow, {influencers: this.props.Influencers})
      )
    );
  }
});

module.exports = InfluencersResultsContent;


},{"./InfluencersResultsProfile.js.jsx":"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/InfluencersResultsProfile.js.jsx"}],"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/InfluencersResultsProfile.js.jsx":[function(require,module,exports){
var BadgeList = React.createClass({displayName: "BadgeList",
  render: function(){

    var createBadge = function(tagName, index){
      return React.createElement("span", {className: "badge", key: index}, tagName) ;
    };

    return(
      React.createElement("div", null, " ", this.props.tags.map(createBadge), " ")
    );
  }

});

var ListOfLinks = React.createClass({displayName: "ListOfLinks",
  render: function(){
    var createListItem = function(linkSet, index){
      return React.createElement("li", {key: index}, React.createElement("a", {href: linkSet.link}, " ", linkSet.name, " "))
    };

    return (
      React.createElement("ul", null
      )
    );
  }

});

var InfluencersResultsProfile = React.createClass({displayName: "InfluencersResultsProfile",
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
      React.createElement("div", {className: "col-md-3"}, 
        React.createElement("div", {className: "panel panel-default"}, 
          React.createElement("div", {className: "panel-body", style: panelStyle}, 
            React.createElement("a", {href: influencer_page}, React.createElement("img", {src: photoToView, className: "img-responsive"}))
          ), 
          React.createElement("div", {className: "panel-footer"}, 

            React.createElement("a", {href: influencer_page, style: nameStyle}, React.createElement("h3", null, this.props.first_name)), 
            React.createElement("h5", {style: nameStyle}, this.props.industry), 
            React.createElement(ListOfLinks, {links: this.props.socialLinks}), 
            React.createElement(BadgeList, {tags: this.props.badges})

          )
        )
      )
    );
  }
});

var InfluencersResultsRow = React.createClass({displayName: "InfluencersResultsRow",
  render: function(){

   var InfluencerInfo = this.props.influencers;
    var createInfluencerProfile = function(inf, index){
      return React.createElement(InfluencersResultsProfile, {
				key: index, 
				influencer_id: inf.user.id, 
        first_name: inf.user.first_name, 
				imageLink: inf.social_media_info.profile_pic, 
        badges: ["Grumpy", "Sneezy"], 
        socialLinks: inf.socialLinks, 
        industry: inf.industries[0].name}

      );
    };

    return (
      React.createElement("div", {className: "row"}, 
        InfluencerInfo.map(createInfluencerProfile)
      )
    );
  }

});

module.exports = InfluencersResultsRow;


},{}],"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/_stream_0.js":[function(require,module,exports){
var InfluencersResultsContent = require('./InfluencersResultsContent.js.jsx');
var InfluencersFilters = require('./InfluencersFilters.js.jsx');

var InfluencersResults = React.createClass({
  displayName: 'InfluencersResults',

  render: function () {
    if (this.props.errorMessage) {
      return React.createElement(
        'div',
        null,
        ' this.state.errorMessage '
      );
    }
    mainContainerStyle = {
      marginTop: 70
    };

    return React.createElement(
      'div',
      { id: 'mainContainer', className: 'container', style: mainContainerStyle },
      React.createElement(InfluencersFilters, null),
      React.createElement('hr', null),
      React.createElement(InfluencersResultsContent, { Influencers: this.props.influencers })
    );
  }
});

module.exports = InfluencersResults;

},{"./InfluencersFilters.js.jsx":"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/InfluencersFilters.js.jsx","./InfluencersResultsContent.js.jsx":"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/InfluencersResultsContent.js.jsx"}],"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/node_modules/classnames/index.js":[function(require,module,exports){
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}]},{},["/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/_stream_0.js"]);
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/InfluencersResultsProfile.js.jsx":[function(require,module,exports){
var BadgeList = React.createClass({displayName: "BadgeList",
  render: function(){

    var createBadge = function(tagName, index){
      return React.createElement("span", {className: "badge", key: index}, tagName) ;
    };

    return(
      React.createElement("div", null, " ", this.props.tags.map(createBadge), " ")
    );
  }

});

var ListOfLinks = React.createClass({displayName: "ListOfLinks",
  render: function(){
    var createListItem = function(linkSet, index){
      return React.createElement("li", {key: index}, React.createElement("a", {href: linkSet.link}, " ", linkSet.name, " "))
    };

    return (
      React.createElement("ul", null
      )
    );
  }

});

var InfluencersResultsProfile = React.createClass({displayName: "InfluencersResultsProfile",
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
      React.createElement("div", {className: "col-md-3"}, 
        React.createElement("div", {className: "panel panel-default"}, 
          React.createElement("div", {className: "panel-body", style: panelStyle}, 
            React.createElement("a", {href: influencer_page}, React.createElement("img", {src: photoToView, className: "img-responsive"}))
          ), 
          React.createElement("div", {className: "panel-footer"}, 

            React.createElement("a", {href: influencer_page, style: nameStyle}, React.createElement("h3", null, this.props.first_name)), 
            React.createElement("h5", {style: nameStyle}, this.props.industry), 
            React.createElement(ListOfLinks, {links: this.props.socialLinks}), 
            React.createElement(BadgeList, {tags: this.props.badges})

          )
        )
      )
    );
  }
});

var InfluencersResultsRow = React.createClass({displayName: "InfluencersResultsRow",
  render: function(){

   var InfluencerInfo = this.props.influencers;
    var createInfluencerProfile = function(inf, index){
      return React.createElement(InfluencersResultsProfile, {
				key: index, 
				influencer_id: inf.user.id, 
        first_name: inf.user.first_name, 
				imageLink: inf.social_media_info.profile_pic, 
        badges: ["Grumpy", "Sneezy"], 
        socialLinks: inf.socialLinks, 
        industry: inf.industries[0].name}

      );
    };

    return (
      React.createElement("div", {className: "row"}, 
        InfluencerInfo.map(createInfluencerProfile)
      )
    );
  }

});

module.exports = InfluencersResultsRow;


},{}],"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/_stream_0.js":[function(require,module,exports){
var InfluencersResultsRow = require('./InfluencersResultsProfile.js.jsx');

var InfluencersResultsContent = React.createClass({
  displayName: "InfluencersResultsContent",

  //var array = new Array();
  render: function () {
    //var someTestInfluencers = array(this.props.Influencers);

    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(InfluencersResultsRow, { influencers: this.props.Influencers })
    );
  }
});

module.exports = InfluencersResultsContent;

},{"./InfluencersResultsProfile.js.jsx":"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/InfluencersResultsProfile.js.jsx"}]},{},["/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/_stream_0.js"]);
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
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/_stream_0.js":[function(require,module,exports){
var SearchField = React.createClass({
	displayName: "SearchField",

	render: function () {
		return React.createElement(
			"div",
			{ className: "col-md-2" },
			React.createElement(
				"div",
				{ className: "form-group form-group-lg" },
				React.createElement("input", { type: "text", className: "form-control", placeholder: this.props.name, onChange: this.onChange, value: this.props.value })
			)
		);
	}
});

var InfluencersSearch = React.createClass({
	displayName: "InfluencersSearch",

	render: function () {
		var titleStyle = {
			fontWeight: "bold"
		};

		var btnStyle = {
			borderColor: "#ED005F"
		};

		return React.createElement(
			"div",
			{ className: "container contentContainer", id: "topContainer" },
			React.createElement("br", null),
			React.createElement("br", null),
			React.createElement("br", null),
			React.createElement(
				"div",
				{ className: "row", id: "topRow" },
				React.createElement("div", { className: "col-md-5" }),
				React.createElement(
					"div",
					{ className: "col-md-6" },
					React.createElement(
						"h1",
						{ style: titleStyle },
						" Locals Love It "
					),
					React.createElement(
						"p",
						{ className: "lead" },
						" Connecting small businesses with local level influencers "
					)
				)
			),
			React.createElement(
				"div",
				{ className: "row" },
				React.createElement("div", { className: "col-md-5" }),
				React.createElement(SearchField, { name: "Location", ref: "location" }),
				React.createElement(SearchField, { name: "Industry", ref: "industry" }),
				React.createElement("br", null),
				React.createElement("br", null)
			),
			React.createElement(
				"div",
				{ className: "row" },
				React.createElement(
					"div",
					{ className: "col-md-3 col-md-offset-6" },
					React.createElement(
						"a",
						{ className: "btn btn-default btn-lg btn-block", style: btnStyle, href: "/influencers", role: "button", id: "findInfluencers", onClick: this.props.onSubmit },
						"Find me influencers!"
					)
				)
			)
		);
	}
});

module.exports = InfluencersSearch;

},{}]},{},["/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/_stream_0.js"]);
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/_stream_0.js":[function(require,module,exports){

window.InfluencersResults = require('./components/influencers/InfluencersResults.js.jsx');
window.InfluencerProfile = require('./components/influencers/InfluencerProfile.js.jsx');
window.NavBar = require('./components/NavBar.js.jsx');
window.InfluencersSearch = require('./components/influencers/InfluencersSearch.js.jsx');


},{"./components/NavBar.js.jsx":"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/NavBar.js.jsx","./components/influencers/InfluencerProfile.js.jsx":"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/InfluencerProfile.js.jsx","./components/influencers/InfluencersResults.js.jsx":"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/InfluencersResults.js.jsx","./components/influencers/InfluencersSearch.js.jsx":"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/InfluencersSearch.js.jsx"}],"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/NavBar.js.jsx":[function(require,module,exports){
var NavBar = React.createClass({displayName: "NavBar",
  render: function(){
    return (
      React.createElement("div", {className: "navbar navbar-default navbar-fixed-top"}, 
        React.createElement("div", {className: "container-fluid"}, 
          React.createElement("div", {className: "navbar-header"}, 
            React.createElement("a", {className: "navbar-brand", href: "#"}, " Locals Love It ")
          )
        )
      )
    );
  }
});

module.exports = NavBar;


},{}],"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/common/ButtonGroup.js.jsx":[function(require,module,exports){
var classNames = require('classnames');

var Button = React.createClass({displayName: "Button",

  getInitialState: function(){
    return {active: false};
  },

  click(){
      this.setState({active: !this.state.active});
  },

  render: function(){
    var btnClass = classNames({
      'btn btn-info': true,
      'active': this.state.active
    });
    return (
      React.createElement("button", {type: "button", className: btnClass, onClick: this.click}, this.props.name)
    );
  }
});

var ButtonGroup = React.createClass({displayName: "ButtonGroup",
  render: function(){

    var createListItem = function(optionName){
      return React.createElement(Button, {key: optionName, name: optionName});
    };

    return(
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-md-2"}, 
          React.createElement("h5", null, " ", this.props.title)
        ), 
        React.createElement("div", {className: "col-md-8"}, 
          React.createElement("div", {className: "btn-group", role: "group", "aria-label": "..."}, 
            this.props.items.map(createListItem)
            )
        )
    )
    );
  }
});

module.exports = ButtonGroup;


},{"classnames":"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/node_modules/classnames/index.js"}],"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/common/DropDownFormGroup.js.jsx":[function(require,module,exports){
var ListItemWithLink = React.createClass({displayName: "ListItemWithLink",
  render: function(){
    return (
      React.createElement("li", null, React.createElement("a", {href: "#"}, this.props.option))
    );
  }
});


var DropDownFormGroup = React.createClass({displayName: "DropDownFormGroup",


  render: function(){

    var createListItem = function(optionName){
      return React.createElement(ListItemWithLink, {key: optionName, option: optionName});
    };

    return(
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-md-2"}, 
          React.createElement("h5", null, " ", this.props.title)
        ), 
        React.createElement("div", {className: "col-md-8"}, 
          React.createElement("div", {className: "form-group"}, 
            React.createElement("div", {className: "input-group-btn"}, 
              React.createElement("button", {type: "button", className: "btn btn-info dropdown-toggle", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false"}, this.props.title, React.createElement("span", {className: "caret"})), 
              React.createElement("ul", {className: "dropdown-menu"}, 
                this.props.items.map(createListItem)
              )
            )
          )
        )
      )
    );
  }
});

module.exports = DropDownFormGroup;


},{}],"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/InfluencerProfile.js.jsx":[function(require,module,exports){
var ProfileSidebar = React.createClass({displayName: "ProfileSidebar",
  render: function(){

    var colStyle ={
      marginTop: 10
    };

    return(
      React.createElement("div", {className: "col-md-4", style: colStyle}, 
        React.createElement("div", {className: "panel panel-default"}, 
          React.createElement("div", {className: "panel-body"}, 
            React.createElement("h3", null, this.props.name)
          )
        )
      )
    );
  }
});

var Profile = React.createClass({displayName: "Profile",
render: function(){

  var contentStyle = {
    border: "solid",
    borderColor: "#ED005F",
    borderRadius: 5,
    marginTop: 70
  };

  return (
    React.createElement("div", {style: contentStyle, className: "container contentContainer"}, 
      React.createElement("div", {className: "row"}, 
        React.createElement(ProfileSidebar, {name: JSON.stringify(this.props.influencer)})
      )
    )
  );
}


});

module.exports = Profile;


},{}],"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/InfluencersFilters.js.jsx":[function(require,module,exports){
var DropDownFormGroup = require('../common/DropDownFormGroup.js.jsx');
var ButtonGroup = require('../common/ButtonGroup.js.jsx');

var InfluencersFilters = React.createClass({displayName: "InfluencersFilters",
  render: function(){
    return (

        React.createElement("div", {className: "row"}, 
            React.createElement(ButtonGroup, {title: "Type of Promotion ", items: ["Review", "Photo & Comment", "Sale for Fans"]}), 
            React.createElement("hr", null), 
            React.createElement(ButtonGroup, {title: "Frequency ", items: ["One-Time Shoutout", "On-going relationship"]}), 
            React.createElement("hr", null), 
            React.createElement(ButtonGroup, {title: "Personality ", items: ["Quirky", "Witty", "Bubbly", "Sassy", "Conservative"]}), 
            React.createElement("hr", null), 
            React.createElement(DropDownFormGroup, {title: "Budget", items: ["$0-$10", "$10-$30", "$30-$50", "$50-$75", "$75-$100", "$100+"]})
        )
    );
  }
});


module.exports = InfluencersFilters;


},{"../common/ButtonGroup.js.jsx":"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/common/ButtonGroup.js.jsx","../common/DropDownFormGroup.js.jsx":"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/common/DropDownFormGroup.js.jsx"}],"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/InfluencersResults.js.jsx":[function(require,module,exports){
var InfluencersResultsContent = require('./InfluencersResultsContent.js.jsx');
var InfluencersFilters = require('./InfluencersFilters.js.jsx');

var InfluencersResults = React.createClass({displayName: "InfluencersResults",
  render: function() {
		if (this.props.errorMessage) {
			return (
				React.createElement("div", null, " this.state.errorMessage ")
			);
		}
    mainContainerStyle = {
      marginTop: 70
    };

    return (
      React.createElement("div", {id: "mainContainer", className: "container", style: mainContainerStyle}, 
				React.createElement(InfluencersFilters, null), 
				React.createElement("hr", null), 
        React.createElement(InfluencersResultsContent, {Influencers: this.props.influencers})
      )
    );
  }
});

module.exports = InfluencersResults;


},{"./InfluencersFilters.js.jsx":"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/InfluencersFilters.js.jsx","./InfluencersResultsContent.js.jsx":"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/InfluencersResultsContent.js.jsx"}],"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/InfluencersResultsContent.js.jsx":[function(require,module,exports){
var InfluencersResultsRow = require('./InfluencersResultsProfile.js.jsx');

var InfluencersResultsContent = React.createClass({displayName: "InfluencersResultsContent",
  //var array = new Array();
  render: function(){
   //var someTestInfluencers = array(this.props.Influencers);

    return(
      React.createElement("div", {className: "container"}, 
        React.createElement(InfluencersResultsRow, {influencers: this.props.Influencers})
      )
    );
  }
});

module.exports = InfluencersResultsContent;


},{"./InfluencersResultsProfile.js.jsx":"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/InfluencersResultsProfile.js.jsx"}],"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/InfluencersResultsProfile.js.jsx":[function(require,module,exports){
var BadgeList = React.createClass({displayName: "BadgeList",
  render: function(){

    var createBadge = function(tagName, index){
      return React.createElement("span", {className: "badge", key: index}, tagName) ;
    };

    return(
      React.createElement("div", null, " ", this.props.tags.map(createBadge), " ")
    );
  }

});

var ListOfLinks = React.createClass({displayName: "ListOfLinks",
  render: function(){
    var createListItem = function(linkSet, index){
      return React.createElement("li", {key: index}, React.createElement("a", {href: linkSet.link}, " ", linkSet.name, " "))
    };

    return (
      React.createElement("ul", null
      )
    );
  }

});

var InfluencersResultsProfile = React.createClass({displayName: "InfluencersResultsProfile",
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
      React.createElement("div", {className: "col-md-3"}, 
        React.createElement("div", {className: "panel panel-default"}, 
          React.createElement("div", {className: "panel-body", style: panelStyle}, 
            React.createElement("a", {href: influencer_page}, React.createElement("img", {src: photoToView, className: "img-responsive"}))
          ), 
          React.createElement("div", {className: "panel-footer"}, 

            React.createElement("a", {href: influencer_page, style: nameStyle}, React.createElement("h3", null, this.props.first_name)), 
            React.createElement("h5", {style: nameStyle}, this.props.industry), 
            React.createElement(ListOfLinks, {links: this.props.socialLinks}), 
            React.createElement(BadgeList, {tags: this.props.badges})

          )
        )
      )
    );
  }
});

var InfluencersResultsRow = React.createClass({displayName: "InfluencersResultsRow",
  render: function(){

   var InfluencerInfo = this.props.influencers;
    var createInfluencerProfile = function(inf, index){
      return React.createElement(InfluencersResultsProfile, {
				key: index, 
				influencer_id: inf.user.id, 
        first_name: inf.user.first_name, 
				imageLink: inf.social_media_info.profile_pic, 
        badges: ["Grumpy", "Sneezy"], 
        socialLinks: inf.socialLinks, 
        industry: inf.industries[0].name}

      );
    };

    return (
      React.createElement("div", {className: "row"}, 
        InfluencerInfo.map(createInfluencerProfile)
      )
    );
  }

});

module.exports = InfluencersResultsRow;


},{}],"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/components/influencers/InfluencersSearch.js.jsx":[function(require,module,exports){
var SearchField = React.createClass({displayName: "SearchField",
  render: function(){
    return(
      React.createElement("div", {className: "col-md-2"}, 
        React.createElement("div", {className: "form-group form-group-lg"}, 
          React.createElement("input", {type: "text", className: "form-control", placeholder: this.props.name, onChange: this.onChange, value: this.props.value})
        )
      )
    );
  }
});

var InfluencersSearch = React.createClass({displayName: "InfluencersSearch",
	render: function(){
			var titleStyle = {
					fontWeight: "bold"
			};

			var btnStyle = {
				borderColor: "#ED005F"
			};

			return(
				React.createElement("div", {className: "container contentContainer", id: "topContainer"}, 
				React.createElement("br", null), 
				React.createElement("br", null), 
				React.createElement("br", null), 

					React.createElement("div", {className: "row", id: "topRow"}, 
						React.createElement("div", {className: "col-md-5"}), 
						 React.createElement("div", {className: "col-md-6"}, 
							 React.createElement("h1", {style: titleStyle}, " Locals Love It "), 
								React.createElement("p", {className: "lead"}, " Connecting small businesses with local level influencers ")
							)
					), 

					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "col-md-5"}), 
							React.createElement(SearchField, {name: "Location", ref: "location"}), 
							React.createElement(SearchField, {name: "Industry", ref: "industry"}), 
						React.createElement("br", null), 
						React.createElement("br", null)
				 ), 

				 React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-md-3 col-md-offset-6"}, 
						React.createElement("a", {className: "btn btn-default btn-lg btn-block", style: btnStyle, href: "/influencers", role: "button", id: "findInfluencers", onClick: this.props.onSubmit}, "Find me influencers!")
					)
				 )
				)

			);
  }
});


module.exports = InfluencersSearch;


},{}],"/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/node_modules/classnames/index.js":[function(require,module,exports){
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}]},{},["/Users/JuanDa/Documents/Academics/2015-2016/Winter/nuvention/backend/app/assets/javascripts/_stream_0.js"]);
