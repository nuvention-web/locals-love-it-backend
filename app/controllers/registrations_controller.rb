class RegistrationsController < Devise::RegistrationsController

	def new_influencer
		@influencer = Influencer.new({twitter_handle: params[:twitter_handle]})
		user_name_array = Namae.parse @influencer.twitter_user.name
		user_name = user_name_array[0]
		@user = User.new({first_name: user_name.given, last_name: user_name.family})
		render 'influencers/new'
	end

	def create_influencer
    build_resource(sign_up_params)

    resource.save
    yield resource if block_given?
    if resource.persisted?
			influencer = Influencer.new(influencer_params(resource))
			influencer.save
      if resource.active_for_authentication?
        set_flash_message! :notice, :signed_up
        sign_up(resource_name, resource)
				puts influencer.inspect
				redirect_to '/influencers/' + influencer.id.to_s
      else
        set_flash_message! :notice, :"signed_up_but_#{resource.inactive_message}"
        expire_data_after_sign_in!
				redirect_to '/'
      end
    else
      clean_up_passwords resource
      set_minimum_password_length
			redirect_to action: 'new_influencer', twitter_handle: params[:twitter_handle]
    end
	end

	private

	def sign_up_params
		if params[:user]
			params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
		else
			params[:influencer][:user].permit(:first_name, :last_name, :email, :password, :password_confirmation).merge({role: 'influencer'})
		end
	end	
	def account_update_params
		params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :current_password)
	end

  def set_flash_message!(key, kind, options = {})
    if is_flashing_format?
      set_flash_message(key, kind, options)
    end
  end

	def influencer_params(user)
		params.require(:influencer).
			permit(:twitter_handle, :short_bio).
			merge({user: user})
	end
end
