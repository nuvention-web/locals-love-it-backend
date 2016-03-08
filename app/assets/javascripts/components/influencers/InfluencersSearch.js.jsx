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
			};
			
			var padding = {
				paddingTop: "6%",
			};

			return(
				<div className = "contentContainer"  id = "topContainer">




					<div className ="row" id = "topRow">
						 <div className = "col-md-6 col-md-offset-3">
					       	 </div>
					</div>

				     <div className ="row">
				      <div className = "col-md-4 col-md-offset-4" style={padding}>
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
					  <div className = "row">
					<div className = "col-md-6 col-md-offset-3">
						<input className=" form-control btn btn-default btn-lg btn-block" href="/influencers" role="button" id = "findInfluencers" onClick = {this.props.onSubmit} value = "find influencers"/>
					</div>
				 </div>

				        </div>
				       </div>
				       </div>
				       <div className = "row" id = "secondRow">
				       </div>
				       <div className = "row" id = "thirdRow">
				       </div>
		       		       <br/>
				 </div>
                                 <div className = "row" id = "secondRow">
				       </div>
				       <div className = "row" id = "thirdRow">
				       </div>

				</div>

			);
  }
});


module.exports = InfluencersSearch;
