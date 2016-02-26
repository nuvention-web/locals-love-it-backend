class InfluencersController < ApplicationController
	def index 
		#serializer = ActiveModel::Serializer::ArraySerializer.new(Influencer.all, serializer: InfluencersSerializer)
		@influencers = Influencer.all.collect do |i|
			serializer = InfluencersSerializer.new(i)
			serialization = ActiveModel::Serializer::Adapter.create(serializer)
			serialization.as_json
		end
		render component: 'InfluencersResults', props: {influencers: @influencers}
	end

	def show
		@influencer = Influencer.find(params[:id])
		render json: @influencer, serializer: InfluencersSerializer, adapter: :json, is_single: true
	end
end
