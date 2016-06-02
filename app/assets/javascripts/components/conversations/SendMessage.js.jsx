var Folders = require('./Folders.js.jsx');
var Form = require('./Form.js.jsx')

var SendMessage = React.createClass({
  render: function() {

  var path_new = '/conversations/new'
  console.log(this.props.is_conversation)
  console.log(this.props.recipient)

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
            {/*
            <% if is_conversation %>
              <%= render partial: 'conversations/form', locals: { is_conversation: is_conversation } %>
            <% else %>
                <%= render partial: 'conversations/conversation', collection: messages %>
            <% end %>
            */}
          </div>
        </div>
      </div>

    </div>
    );
  }
});

module.exports = SendMessage;
