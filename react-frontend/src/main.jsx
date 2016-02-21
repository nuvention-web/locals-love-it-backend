var React = require('react');
var ReactDOM = require('react-dom');
var Index = require('./components/Index.jsx');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory=require('react-router/lib/browserHistory');
window.React = React;

var Routes = (
  <Route name="app" component={Index} path="/">
  </Route>
);

ReactDOM.render((<Router history={browserHistory}>{Routes}</Router>), document.getElementById('content'));
