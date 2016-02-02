require 'spec_helper'
require 'pry'

xdescribe InfluencersSerializer do
	let(:resource) { FactoryGirl.build(:influencer_with_industry) }

	let(:serializer) { InfluencersSerializer.new(resource) }
	let(:serialization) { ActiveModel::Serializer::Adapter.create(serializer) }

	it "has industries" do
		serialization
	end

	it "has a user_id"

	it "has a twitter_handle"

	it "has number of follower for twitter"

	it "has a first name and last name"
	
end
