var SearchField = React.createClass({
  render: function(){
    return(

        <div className="form-group form-group-lg">
          <input type="text" className="form-control" placeholder={this.props.name} onChange={this.onChange} value = {this.props.value}/>
        </div>

    );
  }
});

var titleStyle = {
		fontWeight: "bold"
};

var btnStyle = {
};
var fauxColor1 = {
	backgroundColor:"#bfd8d2",
};
var fauxColor2 = {
	backgroundColor:"#fedcd2",
};

var styleforGlyph1 = {
	color:"#bfd8d2",
	fontSize: "50px",
};

var styleforGlyph2 = {
	color: "#fedcd2",
	fontSize: "50px",
};

var styleforGlyph3 = {
  color:"#df744a",
	fontSize: "50px",
};
var styleforGlyph4 = {
  color:"#e5e338",
	fontSize: "50px",
};
var fauxColor3 = {
	backgroundColor:"#df744a",
};
var fauxColor4 = {
	backgroundColor:"#e5e338",
};
var padding = {
	paddingTop: "6%",
};
var mainStyle = {
	height:"100%",
};

var onClickInfluencer = function() {
 this.setState({userIsInfluencer: true})
};

var onClickSMB = function() {
 this.setState({userIsInfluencer: false})
};

var WelcomingMainBox = React.createClass({

	getInitialState:function(){
		return {UserIsInfluencer: false};
	},
 
	handleUserRole: function() {


	var IsSMB=		 (<div className = "panel panel-default" id = "home_panel">
						<br/>
							<div className = "row">
								<div className = "col-md-4 col-md-offser-4 col-lg-4 col-lg-offset-4">
									 <button type="button" className="btn btn-primary navbar-btn" onClick = {onClickInfluencer.bind(this)}>I'm an influencer</button>
								</div>
							</div> 
					    <br/>

						<div className = "panel-heading" id = "home_panel_header">
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
				  </div>);

	var IsInfluencerLogged= (<div className = "panel panel-dafault">
							 <div className = "panel-heading" id = "home_panel_header">
								 <h1 className = "lead" >Welcome Influencer!</h1>
							</div>

							<div className = "panel panel-body">
							  <div className = "row">
								<div className = "col-md-8 col-md-offset-2">
									<form action ='/mailbox/inbox' method = 'get'><input type = "submit" className=" form-control btn btn-default btn-lg btn-block" href="/mailbox/inbox" role="button" id = "gotoMailbox" onClick = {this.props.onSubmit} value = "Go to Inbox"/></form>
								</div>
							  </div>

						</div>
					</div>);

	var IsInfluencerNew	=	(<div className = "panel panel-default" id = "home_panel">

								<div className = "panel-heading" id = "home_panel_header">
									 <h1 className = "lead" >Please input your twitter handle</h1>
								</div>

							   <br/><div className = "row">
										<div className = "col-md-4 col-md-offser-4 col-lg-4 col-lg-offset-4">
											<button type="button" className="btn btn-primary navbar-btn" onClick = {onClickSMB.bind(this)}>I'm an SMB</button>
										</div>
									</div> 
							   <br/>

								<div className = "panel panel-body">

										 <div className = "row">
											<div className = "col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
												 <SearchField name = {"Twitter Handle"} ref="handleField" />
											</div>
										</div>

										  <div className = "row">
											<div className = "col-md-8 col-md-offset-2">
												<form action ='/influencers' method = 'get'><input type = "submit" className=" form-control btn btn-default btn-lg btn-block" href={"/influencers/new?twitter_handle="} role="button" id = "makeNewInfluencers" onClick = {this.props.onSubmit} value = "Sumbit"/></form>
											</div>
										  </div>

								</div>

									</div>);

	if (this.props.role=='influencer'){
			return IsInfluencerLogged;
	}else if(this.state.userIsInfluencer){

			return IsInfluencerNew;
	}else {

			return IsSMB;
	}
	

},
	render: function () {
				return(
						<div className = "col-md-4" style={padding}>
							{this.handleUserRole()}
						</div>);
}

});

var FrontSecondRow = React.createClass({
	render: function() {
		return(
			   <div className = "row frontSecondRow" id = "secondRow">
				   <div className = "row howItWorks">
						<div className = "col-md-12 col-lg-12 col-sm-12">
							<h1>How It Works! - Steps:</h1>
						</div>
				   </div>
			   <div className = "col-md-3 frontColumns" >
			   <div className = "row">
					 <div className = "col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" style = {fauxColor1}>
						<br/>
				   </div>
				   <div className = "row glyphHolder">
						 <div className = "col-md-12">
							<span className = "glyphicon glyphicon-search" aria-hidden="true" style = {styleforGlyph1}></span>
						 </div>
				   </div>
				   <div id = "row">
					   <div className = "col-md-12">
						   <div className = "row">
								<h3>(1) Search</h3>
						   </div>
						   <div className = "row">
							   <div className = "col-md-8 col-md-offset-2">
									<p>The customized search functionality helps you discover the influencer with the ideal personality</p>
							   </div>
						   </div>
					   </div>
				   </div>
			   </div>

			   </div>
					  <div className = "col-md-3 frontColumns" >
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
						<h3>(2) Communicate</h3>
						</div>
						<div className = "row">
						<div className = "col-md-8 col-md-offset-2">
						<p>Our platform provides a centralized location for messaging and templates so you can easily brief influencers on your business needs</p>
						</div>
						</div>
						</div>
						</div>
						   </div>

					  </div>

					<div className = "col-md-3 frontColumns" >
					   <div className = "row">
						 <div className = "col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" style = {fauxColor3}>
						  <br/>
						  </div>
						  <div className = "row glyphHolder">
							  <div className = "col-md-12">
							  <span className = "glyphicon glyphicon-usd" aria-hidden="true" style = {styleforGlyph3}></span>
							  </div>
								</div>
						  <div id = "row">
						  <div className = "col-md-12">
						  <div className = "row">
						  <h3>(3) Pay</h3>
						  </div>
						  <div className = "row">
						  <div className = "col-md-8 col-md-offset-2">
						  <p>Get complete transparency and benchmarks on what other small businesses are paying for campaigns</p>
						  </div>
						  </div>
						  </div>
						  </div>
					   </div>

					   </div>
			  <div className = "col-md-3 frontColumns" >
			  <div className = "row">
				<div className = "col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" style = {fauxColor4}>
			  <br/>
			  </div>
			   <div className = "row glyphHolder">
			 <div className = "col-md-12">
			  <span className = "glyphicon glyphicon-briefcase" aria-hidden="true" style = {styleforGlyph4}></span>
			 </div>
		   </div>
			  <div id = "row">
			  <div className = "col-md-12">
			  <div className = "row">
			  <h3>(4) Measure</h3>
			  </div>
			  <div className = "row">
			  <div className = "col-md-8 col-md-offset-2">
			  <p>Our measurement dashboard tracks the effectiveness of your campaigns and measures ROI</p>
			  </div>
			  </div>
			  </div>
			  </div>
				   </div>

			  </div>
		 </div>
	);}
});

var FrontThirdRow = React.createClass({
	render: function () {
	return (

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
	    <div className = "row">
	    <div className = "col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
	    <h3>Build buzz for the launch of a new product</h3>
	    </div>
	    </div>
	   </div>
	  </div>
	   </div>
	   </div>
     </div>

	);}
});

var Front4thRow = React.createClass({

	render: function () {

	return (

			  <div className = "row front4thRow" id = "thirdRow">
			<div className = "col-md-12 col-lg-12 col-sm-12 col-xs-12">
			<div className = "col-md-12 col-lg-12 col-sm-12 hereToHelp">
				<h2>Why work with Locals Love It?:</h2>
			</div>
			<div className = "col-md-12 col-lg-12 col-sm-12 weHelpBy">
				<div className = "row">
					  <div className = "col-md-12 col-lg-12">
						<div className = "row">
							<div className = "col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
								<h3>The Locals Love it Difference: We take the guess-work out of influencer marketing.
								Locals Love It is the the only user-friendly digital tool connecting small business to local-level influencers.
								 The application was tailor-made for small businesses through dozens of customer interviews, we uncovered exactly what you’re looking for in an influencer marketing partner.</h3>
						   </div>
					   </div>
					 </div>
				</div>
			   </div>
			   </div>
			   </div>
		)
	}

});
var Front5thRow = React.createClass({

	render: function () {
		return (
			   <div className = "row front5thRow" id = "thirdRow">
			  <div className = "col-md-12 col-lg-12 col-sm-12 col-xs-12">
			  <div className = "col-md-12 col-lg-12 col-sm-12 hereToHelp">
					  <h2>About us</h2>
			  </div>
					 <div className = "col-md-12 col-lg-12 col-sm-12 weHelpBy">
			   <div className = "row">
				<div className = "col-md-12 col-lg-12">
				 <div className = "row">
				 <div className = "col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
				 <h3>Locals Love It is a group of seven Northwestern University undergraduate and graduate students who are working to build their first business. We are deeply passionate about using technology to solve real problems. </h3>
				 </div>
				 </div>
				 </div>
				 </div>
				 </div>
				 </div>
				 </div>

		);}
});

var MainFooter = React.createClass({
	render: function () {
		return(
		<div className = "row mainFooter">
		 <div className = "col-md-12 col-lg-12">
			  <br/>
			  <br/>
		 </div>
		</div>
	);}
});

var InfluencersSearch = React.createClass({
/*
	getInitialState:function(){
		return {UserIsInfluencer: false};
	},
*/

	render: function(){
			this.style={mainStyle};
			var userRole = this.props.userRole
			return(
				<div className = "contentContainer"  id = "topContainer" style = {mainStyle}>
					<div className ="row" id = "topRow">
						 <div className = "col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
					       	 </div>
					</div>

				     <div className ="row" id = "majorRow">
				     <div className = "col-md-4 col-lg-4 explainerHolder">
				      <div className = "row explainer">
				       <div className = "col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
				        <p1>Locals Love It provides an easy way for small businesses to discover, communicate with and pay local-level influencers</p1>
				       </div>
				      </div>
				     </div>
				 <WelcomingMainBox role={this.props.userRole} />
		       		       <br/>
				 </div>
				 <FrontSecondRow/>
				 <FrontThirdRow />
				 <Front4thRow />
				 <Front5thRow />
				 <MainFooter />

	</div>

	);
  }
});


module.exports = InfluencersSearch;
