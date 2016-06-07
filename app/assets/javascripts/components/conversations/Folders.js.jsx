var Folders = React.createClass({

  getInitialState: function() {
    return {
      selected: ""
    };
  },

  handleClick: function(name, event) {
    this.setState({selected : name})
  },

  render: function(){

    var path_inbox = '/mailbox/inbox'
    var path_sent = '/mailbox/sent'
    var path_trash = '/mailbox/trash'

    var style_selected = {
      color: 'blue'
    }

    return (

    <div className="nav nav-pills nav-stacked">
      <a href={path_inbox} style = {this.state.selected == "inbox" ? style_selected : null} onClick = {this.handleClick.bind(this, "inbox")} className="list-group-item">Inbox</a>
      <a href={path_sent} style = {this.state.selected == "sent" ? style_selected : null} onClick = {this.handleClick.bind(this, "sent")} className="list-group-item">Sent</a>
      <a href={path_trash} style = {this.state.selected == "trash" ? style_selected : null} onClick = {this.handleClick.bind(this, "trash")} className="list-group-item">Trash</a>
    </div>

    /*
    <ul className="nav nav-pills nav-stacked">
      <li className="<%= active_page(:inbox) %>" href={path_inbox}>
        <%= link_to mailbox_inbox_path do  %>
        <span className="label label-danger pull-right"><%=unread_messages_count%></span>
        <span>Inbox</span>
      </li>

      <li className="<%= active_page(:sent) %>" href={path_sent}>
        <%= link_to mailbox_sent_path do %>
        <span>Sent</span>
      </li>

      <li className="<%= active_page(:trash) %>" href={path_trash}>
        <%= link_to mailbox_trash_path do %>
        <span>Trash</span>
      </li>
    </ul>
    */
    )
  }
});

module.exports = Folders;
