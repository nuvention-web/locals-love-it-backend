class InfluencersController < ApplicationController
	def index
		@influencers = Influencer.all
		render json: @influencers, each_serializer: InfluencersSerializer, adapter: :json
	end

	def show
		@influencer = Influencer.find(params[:id])
		render json: @influencer, serializer: InfluencersSerializer, adapter: :json, is_single: true
	end
end
