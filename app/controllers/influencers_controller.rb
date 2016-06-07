class InfluencersController < ApplicationController
	def index
		@influencers = Influencer.all.collect do |i|
			serialize i, is_single: false
		end
	end

	def show
		@influencer = serialize Influencer.find(params[:id])
	end

	def search
	end

	def join

	end

	def edit
		@influencer = Influencer.find(params[:id])
	end

	def update
    @influencer = Influencer.find(params[:id])
    if @influencer.update_attributes(influencer_params)
      flash[:success] = "Profile updated"
      redirect_to @influencer
    else
      render 'edit'
    end
	end


	private

	def serialize(influencer, options = {})
			options[:is_single] ||= true

			serializer = InfluencersSerializer.new(influencer, is_single: options[:is_single])
			serialization = ActiveModel::Serializer::Adapter.create(serializer)
			serialization.as_json
	end

	def influencer_params
			params.require(:influencer).permit(:twitter_handle, :short_bio)
	end
end
