var TextArea = React.createClass({

  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    return (
      <fieldset className="form-group">
          <label for="body">Message: </label>
          <textarea className="form-control" id="body" rows="3" placeholder={this.props.temp} onChange = {this.handleChange}></textarea>
        </fieldset>
    );
  }
});

var Form = React.createClass({

  getInitialState: function() {
      return {
          blank : true,
          t1 : false,
          t2 : false,
          template : ""
        }
    },

  handleSubmit: function(type) {
    console.log(type)
    if (type == "blank"){
      this.setState({ blank : true})
      this.setState({ t1 : false })
      this.setState({ t2 : false })
      this.setState({ template : "" })
    }else if (type == "t1"){
      this.setState({ blank : false})
      this.setState({ t1 : true })
      this.setState({ t2 : false })
      this.setState({ template : "Hello, I’m ____. My business website is _______ We’re a small business that sells ______. I reached out to you because I liked _______. Are you interested in working together?" })
    }else if (type == "t2"){
      this.setState({ blank : false})
      this.setState({ t1 : false })
      this.setState({ t2 : true })
      this.setState({ template : "I’m excited to work with you! Our goal with this campaign is to________. We would you like to post ___ times and we’ll pay you ____. Your post should link to our Twitter handle _____ and include the hashtag ______." })
    }
  },

  render: function(){
    var recipient = this.props.recipient

    return (

    <div>
      <div className="form-group">
        <b>To:</b> {recipient.first_name}<br/><br/>
        <b>Subject:</b>
          <input type="text" name="subject" value="" className="form-control"/>
        <br/>
        <TextArea temp={this.state.template} className="form-control"/>
      </div>
      <div className="form-group">
      <b>Templates</b>
        <div className="radio">
          <label>
            <input type="radio" onChange={this.handleSubmit.bind(this, "blank")} checked = {this.state.blank}/> Empty
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" onChange={this.handleSubmit.bind(this, "t1")} checked = {this.state.t1}/> Introduction
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" onChange={this.handleSubmit.bind(this, "t2")} checked = {this.state.t2}/> Detailed
          </label>
        </div>
      </div>
    </div>
    )
  }
});

module.exports = Form;

/*
      <%= f.label :subject %>
      <%= f.text_field :subject, placeholder: "Subject", class: "form-control" %>
    <div className"form-group">
      <%= f.label :message %>
      <%= f.text_area :body, class: 'form-control',placeholder: "Type your message here", rows: 4  %>
    </div>
    */
