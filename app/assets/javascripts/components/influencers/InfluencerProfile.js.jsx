var ProfileSidebar = React.createClass({
  render: function(){

    var colStyle ={
      marginTop: 10
    };

    return(
      <div className = "col-md-4" style = {colStyle}>
        <div className="panel panel-default" >
          <div className="panel-body">
            <h3>{this.props.name}</h3>
          </div>
        </div>
      </div>
    );
  }
});

var Profile = React.createClass({
render: function(){

  var contentStyle = {
    border: "solid",
    borderColor: "#ED005F",
    borderRadius: 5,
    marginTop: 70
  };

  return (
    <div style = {contentStyle} className = "container contentContainer">
      <div className = "row">
        <ProfileSidebar />
      </div>
    </div>
  );
}


});

module.exports = Profile;
