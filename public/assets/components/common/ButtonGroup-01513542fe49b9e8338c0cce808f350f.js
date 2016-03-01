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
