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

	def new
		@influencer = Influencer.new

	end


	private

	def serialize(influencer, options = {})
			options[:is_single] ||= true

			serializer = InfluencersSerializer.new(influencer, is_single: options[:is_single])
			serialization = ActiveModel::Serializer::Adapter.create(serializer)
			serialization.as_json
	end
end
