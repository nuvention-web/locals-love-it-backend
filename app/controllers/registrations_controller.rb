class RegistrationsController < Devise::RegistrationsController

	def new_influencer
		@influencer = Influencer.new
		@user = User.new
		render 'influencers/new'
	end

	private

	def sign_up_params
		params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
	end
end
