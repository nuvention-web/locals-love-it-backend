require 'spec_helper'

describe InfluencersSerializer do
	let(:resource) { FactoryGirl.create(:influencer_with_industry) }
	let(:influencer_industry) { resource.industries.first.name }

	let(:serializer) { InfluencersSerializer.new(resource) }
	let(:serialization) { ActiveModel::Serializer::Adapter.create(serializer) }
	subject(:influencer) { JSON.parse(serialization.to_json) }


	it "has industries" do
		expect(influencer['industries'].first['name']).to eql(influencer_industry) 	
	end

	it "does not have a short_bio" do
		expect(influencer['short_bio']).to eql(nil)
	end

	describe "user" do
		let(:user) { influencer['user'] }

		it "has a user_id" do
			expect(user['id']).to eql(resource.user.id)
		end

		it "has a first name" do
			expect(user['first_name']).to eql(resource.user.first_name)
		end

		it "has a last name" do
		       expect(user['last_name']).to eql(resource.user.last_name)
		end	       

	end

	describe "social_media_info" do
		let(:social_media_info) { influencer['social_media_info'] }

		it "has a profile_pic url" do
			expect(social_media_info['profile_pic']).to be_a(String)
		end

		it "has a twitter_handle" do
			expect(social_media_info['twitter_handle']).to eql(resource.twitter_handle)
		end

		it "has number of follower for twitter" do
			expect(social_media_info['twitter_followers']).to be_an(Integer)
		end
	end

	context "when it's a single influencer" do
		let(:serializer) { InfluencersSerializer.new(resource, is_single: true) }

		it "does have a short_bio" do
			expect(influencer['short_bio']).to eql(resource.short_bio)
		end
	end

	
end
