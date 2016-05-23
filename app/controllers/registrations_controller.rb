class RegistrationsController < Devise::RegistrationsController

	def new_influencer
		@influencer = Influencer.new
		@user = User.new
		render 'influencers/new'
	end

	def create_influencer
		create
	end

	private

	def sign_up_params
		if params[:user]
			params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
		else
			params[:influencer][:user].permit(:first_name, :last_name, :email, :password, :password_confirmation)
		end
	end
end
