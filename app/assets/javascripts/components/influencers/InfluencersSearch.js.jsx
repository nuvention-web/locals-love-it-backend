var SearchField = React.createClass({
  render: function(){
    return(

        <div className="form-group form-group-lg">
          <input type="text" className="form-control" placeholder={this.props.name} onChange={this.onChange} value = {this.props.value}/>
        </div>

    );
  }
});

var InfluencersSearch = React.createClass({
	render: function(){
			var titleStyle = {
					fontWeight: "bold"
			};

			var btnStyle = {
				borderColor: "#ED005F"
			};

			return(
				<div className = "container contentContainer"  id = "topContainer">
				<br />
				<br />
				<br />

					<div className ="row" id = "topRow">
						 <div className = "col-md-6 col-md-offset-3">
					       	 </div>
					</div>

				     <div className ="row">
				      <div className = "col-md-6 col-md-offset-3">
				       <div className = "panel panel-default">
				        <div className = "panel-heading">
				         <p className = "lead" > There's strength in the small </p>
				        </div>

				        <div className = "panel panel-body">
				         <div className = "row">
			  	           <div className = "col-md-6 col-lg-6">
					     <SearchField name = {"Location"} ref = "location" />
					     </div>
			         	   <div className = "col-md-6 col-lg-6">
					     <SearchField name = {"Industry"} ref = "industry" />
			  		   </div>
		       		          </div>
				        </div>
				       </div>
				       </div>
		       		       <br/>
						<br/>
				 </div>

				 <div className = "row">
					<div className = "col-md-3 col-md-offset-6">
						<a className="btn btn-default btn-lg btn-block" style = {btnStyle} href="/influencers" role="button" id = "findInfluencers" onClick = {this.props.onSubmit}>Find me influencers!</a>
					</div>
				 </div>
				</div>

			);
  }
});


module.exports = InfluencersSearch;
