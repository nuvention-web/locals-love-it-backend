var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory=require('react-router/lib/browserHistory');
var Base = require('./components/Base.jsx');
var Index = require('./Index.jsx');
var InfluencersResults = require('./components/InfluencersResults.jsx');

var Routes = (
    <Router history = {browserHistory}>
          <Route path="/" component={Index} />
          <Route path="/influencersresults" component={InfluencersResults} />
    </Router>
);


module.exports = Routes;
