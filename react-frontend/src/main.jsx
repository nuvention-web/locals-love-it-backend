var React = require('react');
var ReactDOM = require('react-dom');
var Hi = React.createClass({
    render: function() {
        return (
            <h4>Hello, World!</h4>
        );
    }
});

ReactDOM.render(<Hi />, document.getElementById('content'));
