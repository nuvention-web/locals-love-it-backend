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
