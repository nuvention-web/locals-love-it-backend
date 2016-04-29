class ApplicationController < ActionController::Base
    helper_method :mailbox

    def mailbox
	@mailbox ||= current_user.mailbox
    end



end
