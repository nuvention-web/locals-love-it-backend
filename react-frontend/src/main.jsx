var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./components/NavBar.jsx')

var navBarLinks = {'home': "#", "dashboard": "#", "inbox":"#", "history":"#", "settings":"#", "logout":"#"};

ReactDOM.render(<NavBar messageNum = {3} links = {navBarLinks}/>, document.getElementById('nav-bar-div'));
