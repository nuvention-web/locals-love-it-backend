var Conversation = React.createClass({

  render: function(){
    var conversation = this.props.conversation

    return (

    <div className="media">
      <div className="media-left">
        <a href="#">
        {/*
          <% if conversation.originator.influencer? %>
            <%image_url = conversation.originator.influencer.twitter_user.profile_image_url_https -%>
            <%= image_tag image_url, style:"height: 64; width: 64;" %>
          <% else %>
            <img className="media-object" src="http://s31.postimg.org/8zhj7as2f/LLI_logo_final_small.png">
          <% end %>
        */}
        </a>
      </div>
      <div className="media-body">
        <div className="media-heading">
        </div>
      </div>
    </div>
        )

      {/*
      <div className="media-body">
        <div className="media-heading">
          {originator.name} <br>
          Subject: {conversation.subject}<br>
          Date: {conversation.messages.last.created_at}<br>
          strftime("%A, %b %d, %Y at %I:%M%p"
        </div>
        {conversation.messages.last.body}
        <%= truncate conversation.messages.last.body, length: 145 %>
        <%= link_to "View", conversation_path(conversation)  %>
      */}
  }
});

module.exports = Conversation;
