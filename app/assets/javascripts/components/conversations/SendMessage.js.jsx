var Folders = require('./Folders.js.jsx');
var Form = require('./Form.js.jsx')

var SendMessage = React.createClass({
  render: function() {

  var path_new = '/conversations/new'
  console.log(this.props.is_conversation)
  console.log(this.props.recipient)

  var conditionalForm;
  if (this.props.recipient != null){
    conditionalForm = <Form recipient={this.props.recipient}/>
  }

  var bitlyLink;
  if (this.props.url != null) {
    bitlyLink = <div>{this.props.url.short_url}</div>
  }

  var hiddenID;
  if (this.props.recipient != null){
    hiddenID = <input id="id" name="id" type="hidden" value={this.props.recipient.id}/>
  }

  return (
    <div className="row">
      <div className="spacer"></div>
      <div className="col-md-12">
      <form action={path_new}>
        <input className="btn btn-success" type="submit" value="Compose"/>
      </form>
        <div className="spacer"></div>
      </div>
      <div className="col-md-4">
        <div className="panel panel-default">
          <div className="panel-body">
            <Folders/>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="panel panel-default">
          <div className="panel-body">
          {conditionalForm}
            {/*
            <% if is_conversation %>
              <%= render partial: 'conversations/form', locals: { is_conversation: is_conversation } %>
            <% else %>
                <%= render partial: 'conversations/conversation', collection: messages %>
            <% end %>
            */}
          </div>
        </div>
        {/*}
        <div>
        <form accept-charset="UTF-8" action="" method="get">
          <input name="utf8" type="hidden" value={this.props.authenticity_token}  />
          <label for="url">URL:</label>
          <input id="url" name="url" type="text"/>
          {hiddenID}
          <input name="commit" type="submit" value="Create Bitly link" />
        </form>
        </div>
        {bitlyLink}
        */}
        <div>
        </div>
      </div>

    </div>
    );
  }
});

module.exports = SendMessage;
