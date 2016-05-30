class InfluencersController < ApplicationController
	def index
		@influencers = Influencer.all.collect do |i|
			serialize i, is_single: false
		end

		render

	end

	def show
		@influencer = serialize Influencer.find(params[:id])

		render

	end

	def search

		render

	end


	private

	def serialize(influencer, options = {})
			options[:is_single] ||= true

			serializer = InfluencersSerializer.new(influencer, is_single: options[:is_single])
			serialization = ActiveModel::Serializer::Adapter.create(serializer)
			serialization.as_json
	end
end
