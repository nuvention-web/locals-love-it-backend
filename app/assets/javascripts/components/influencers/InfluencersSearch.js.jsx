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
				      <div className = "col-md-4 col-md-offset-4" style={padding}>
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
					<div className = "col-md-6 col-md-offset-3">
						<input type = "submit" className=" form-control btn btn-default btn-lg btn-block" href="/influencers" role="button" id = "findInfluencers" onClick = {this.props.onSubmit} value = "find influencers"/>
					</div>
				 </div>

				        </div>
				       </div>
				       </div>
		       		       <br/>
				 </div>
           <div className = "row frontSecondRow" id = "secondRow">
           <div className = "col-md-4 frontColumns" >
           <div className = "row">
             <div className = "col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" style = {fauxColor1}>
           <br/>
           </div>
           <div id = "row">
           <div className = "col-md-12">
           <div className = "row">
           <h3>Info1</h3>
           </div>
           <div className = "row">
           <div className = "col-md-8 col-md-offset-2">
           <p>Info about more</p>
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
					<div id = "row">
					<div className = "col-md-12">
					<div className = "row">
					<h3>Info1</h3>
					</div>
					<div className = "row">
					<div className = "col-md-8 col-md-offset-2">
					<p>Info about more</p>
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
          <div id = "row">
          <div className = "col-md-12">
          <div className = "row">
          <h3>Info1</h3>
          </div>
          <div className = "row">
          <div className = "col-md-8 col-md-offset-2">
          <p>Info about more</p>
          </div>
          </div>
          </div>
          </div>
               </div>

          </div>
				 </div>
				 <div className = "row" id = "thirdRow">
                                   <div className = "col-md-12 col-lg-12 col-sm-12 frontFooter">
				   </div>
				   </div>

				</div>

			);
  }
});


module.exports = InfluencersSearch;
