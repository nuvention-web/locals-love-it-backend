var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;
var BrowserHistory=require('react-router/lib/browserHistory');

var Index = require('./components/Index.jsx');
var InfluencersResults = require('./components/influencers/InfluencersResults.jsx');
debugger;
var Routes = (
    <Router history = {BrowserHistory}>
          <DefaultRoute handler = {Index} />
    </Router>
);
/*
          <Route path = "/index" component = {Index} />

          <!--Route path = "/influencersresults" component = {InfluencersResults} /! -->
          */
module.exports = Routes;
