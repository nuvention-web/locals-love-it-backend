class ConversationsController < ApplicationController
	before_action :authenticate_user!

	def new
    @url = nil
		if params[:id]
			@influencer = params[:id]
      if @influencer
        @recipient = User.find(@influencer)
      elsif
        @recipient = nil
      end
		end
    if !params[:url].blank?
      client = Bitly.client
      @url = client.shorten(params[:url])
    end
	end

  def create
    conversation = current_user.send_message(recipients, conversation_params[:body], conversation_params[:subject]).conversation
    flash[:success] = "Your message was successfully sent!"
    redirect_to conversation_path(conversation)
  end

  def show
    @receipts = conversation.receipts_for(current_user)
    # mark conversation as read
    conversation.mark_as_read(current_user)
  end

  def reply
    current_user.reply_to_conversation(conversation, message_params[:body])
    flash[:notice] = "Your reply message was successfully sent!"
    redirect_to conversation_path(conversation)
  end

  def trash
    conversation.move_to_trash(current_user)
    redirect_to mailbox_inbox_path
  end

  def untrash
    conversation.untrash(current_user)
    redirect_to mailbox_inbox_path
  end

  private

  def conversation_params
    params.require(:conversation).permit(:subject, :body)
  end

	def recipients
		single_rec = params.require(:conversation).permit(:recipients)[:recipients]
		multiple_rec = params.require(:conversation).permit(recipients: [])[:recipients]
		r_params = single_rec.nil? ? multiple_rec : single_rec
		User.where(id: r_params)
	end

  def message_params
    params.require(:message).permit(:body, :subject)
  end
end
