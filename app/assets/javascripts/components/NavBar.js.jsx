var NavBar = React.createClass({
  render: function(){
    return (
      <div className = "navbar navbar-default navbar-fixed-top topNavBar">
        <div className = "container-fluid">
          <div className = "navbar-header">
            <a className = "navbar-brand" href = "#"><img src="<%= asset_url('LLI_logo_final.png') %>" /></a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = NavBar;
