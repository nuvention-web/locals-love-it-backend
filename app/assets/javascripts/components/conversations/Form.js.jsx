var Form = React.createClass({

  getInitialState: function() {
      return {
          blank : true,
          t1 : false,
          template : ""
        }
    },

  handleSubmit: function(type) {
    console.log(type)
    if (type == "blank"){
      this.setState({ blank : true})
      this.setState({ t1 : false })
      this.setState({ template : "" })
    }else if (type == "t1"){
      this.setState({ blank : false})
      this.setState({ t1 : true })
      this.setState({ template : "this is a template" })
    }
  },

  getTemplate: function() {
    if (this.state.blank) {
      return ""
    } else if (this.state.t1) {
      console.log("hereere")
      return "This is template #1"
    } else {
      return "???"
    }
  },

  render: function(){
    var recipient = this.props.recipient

    return (

    <div>
    <div className="form-group">
      To: {recipient.first_name}<br/>
      Subject:<br/>
        <textarea name="subject" defaultValue="Subject line." />
      <br/>
      Message:<br/>
      <textarea name="message" defaultValue={this.state.template} />
    </div>
    <div>
      Templates
      <ul>
        <input type="radio" onChange={this.handleSubmit.bind(this, "blank")} checked = {this.state.blank}/> Blank <br/>
        <input type="radio" onChange={this.handleSubmit.bind(this, "t1")} checked = {this.state.t1}/> Template #1 <br/>
      </ul>
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
