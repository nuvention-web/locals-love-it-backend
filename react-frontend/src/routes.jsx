var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;


var Base = require('./components/Base.jsx');
var Index = require('./components/Index.jsx');
var SearchResults = require('./components/SearchResults.jsx');

var Routes = (
    <Router>
        <Route path="/" component={Base} >
            <Route path="/index" component={Index} />
            <Route path="/searchResults" component={SearchResults} />
        </Route>
    </Router>
);


module.exports = Routes;
