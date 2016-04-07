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
                        var fauxColor1 = {
				backgroundColor:"#ea4c8d",
			};
			var fauxColor2 = {
				backgroundColor:"#00abf0",
			};

			var styleforGlyph1 = {
				color:"#ea4c8d",
				fontSize: "50px",
			};

			var styleforGlyph2 = {
				color: "#00abf0",
				fontSize: "50px",
			};

			var styleforGlyph3 = {
			        color:"#df4a32",
				fontSize: "50px",
			}
			var fauxColor3 = {
				backgroundColor:"#df4a32",
			};
			var padding = {
				paddingTop: "6%",
			};
			var mainStyle = {
				height:"100%",
			};
			this.style={mainStyle};
			return(
				<div className = "contentContainer"  id = "topContainer" style = {mainStyle}>
					<div className ="row" id = "topRow">
						 <div className = "col-md-6 col-md-offset-3">
					       	 </div>
					</div>

				     <div className ="row" id = "majorRow">
				     <div className = "col-md-4 explainerHolder">
				      <div className = "row explainer">
				       <div className = "col-md-10 col-md-offset-1">
				        <p1>Locals Love It provides an easy way for small businesses to discover, communicate with and pay local-level influencers</p1>
				       </div>
				      </div>
				     </div>
				      <div className = "col-md-4" style={padding}>
				       <div className = "panel panel-default">
				        <div className = "panel-heading">
				         <p className = "lead" > There is strength in the small </p>
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
					<div className = "col-md-8 col-md-offset-2">
						<form action ='/influencers' method = 'get'><input type = "submit" className=" form-control btn btn-default btn-lg btn-block" href="/influencers" role="button" id = "findInfluencers" onClick = {this.props.onSubmit} value = "find influencers"/></form>
					</div>
				 </div>

				        </div>
				       </div>
				       </div>
		       		       <br/>
				 </div>
           <div className = "row frontSecondRow" id = "secondRow">
	   <div className = "row howItWorks">
	    <div className = "col-md-12 col-lg-12 col-sm-12">
	        <h1>How It Works!</h1>
	    </div>
	   </div>
           <div className = "col-md-4 frontColumns" >
           <div className = "row">
             <div className = "col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" style = {fauxColor1}>
           <br/>
           </div>
	   <div className = "row glyphHolder">
	     <div className = "col-md-12">
	      <span className = "glyphicon glyphicon-cog" aria-hidden="true" style = {styleforGlyph1}></span>
	     </div>
	   </div>
           <div id = "row">
           <div className = "col-md-12">
           <div className = "row">
           <h3>Algorithmic</h3>
           </div>
           <div className = "row">
           <div className = "col-md-8 col-md-offset-2">
           <p>Our unique algorithm matches your business with the perfect local influencer to satisfy your business needs</p>
           </div>
           </div>
           </div>
           </div>
                </div>

           </div>
				  <div className = "col-md-4 frontColumns" >
				  <div className = "row">
				  	<div className = "col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" style = {fauxColor2}>
					<br/>
					</div>
					<div className = "row glyphHolder">
	                                   <div className = "col-md-12">
	                                      <span className = "glyphicon glyphicon-user" aria-hidden="true" style = {styleforGlyph2}></span>
	                                   </div>
	                                 </div>
					<div id = "row">
					<div className = "col-md-12">
					<div className = "row">
					<h3>Interconnected</h3>
					</div>
					<div className = "row">
					<div className = "col-md-8 col-md-offset-2">
					<p>Communicate with influencers through our simple guided templates and co-create branded content</p>
					</div>
					</div>
					</div>
					</div>
				       </div>

				  </div>
          <div className = "col-md-4 frontColumns" >
          <div className = "row">
            <div className = "col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" style = {fauxColor3}>
          <br/>
          </div>
           <div className = "row glyphHolder">
	     <div className = "col-md-12">
	      <span className = "glyphicon glyphicon-briefcase" aria-hidden="true" style = {styleforGlyph3}></span>
	     </div>
	   </div>
          <div id = "row">
          <div className = "col-md-12">
          <div className = "row">
          <h3>Analytical</h3>
          </div>
          <div className = "row">
          <div className = "col-md-8 col-md-offset-2">
          <p>Measure your campaign's success and benchmark against similar campaigns using our comprehensive analytics dashboard</p>
          </div>
          </div>
          </div>
          </div>
               </div>

          </div>
	 </div>
	 <div className = "row frontThirdRow" id = "thirdRow">
	 <div className = "col-md-12 col-lg-12 col-sm-12 col-xs-12 layer">
	 <div className = "col-md-12 col-lg-12 col-sm-12 hereToHelp">
          <h2>Locals Love It Can Help Your Business:</h2>
	 </div>
         <div className = "col-md-12 col-lg-12 col-sm-12 weHelpBy">
	  <div className = "row">
	   <div className = "col-md-6 col-lg-6">
	    <div className = "row">
	    <div className = "col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
	    <h3> Increase foot traffic during a specific time of day</h3>
	    </div>
	    </div>
	    <div className = "row">
	    <div className = "col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
	    <h3>Align with a personality to reinforce brand positioning</h3>
	    </div>
	    </div>
	    <div className = "row">
	    <div className = "col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
	    <h3>Stand out from big businesses by communicating quality</h3>
	    </div>
	    </div>
	   </div>
	   <div className = "col-md-6 col-lg-6">
	    <div className = "row">
	    <div className = "col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
	    <h3>Appeal to a new type of customer to increase sales</h3>
	    </div>
	    </div>
	    <div className = "row">
	    <div className = "col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
	    <h3>Amplify an existing social media campaign</h3>
	    </div>
	    </div>
	   </div>
	  </div>
	   </div>
	   </div>
	   </div>
        <div className = "row mainFooter">
	 <div className = "col-md-12 col-lg-12">
	  <br/>
	  <br/>
	 </div>
	</div>
	</div>

	);
  }
});


module.exports = InfluencersSearch;
