require 'spec_helper'

shared_examples_for "twitterable", :integration do	
	let(:influencer_model) { described_class } # the class that includes this concern
	let(:influencer) { FactoryGirl.create(influencer_model.to_s.underscore.to_sym, twitter_handle: ENV["TWITTER_TEST_HANDLE"]) }
	let(:twitter_user) { influencer.twitter_user }

	before(:each) do
		WebMock.allow_net_connect!
	end

	after(:each) do
		WebMock.disable_net_connect!
	end

	context 'there is a twitter_handle' do
		it "makes a call to the twitter api" do
			expect(twitter_user).to be_a(Twitter::User)
		end

		it "has the number of followers" do
			expect(twitter_user.followers_count).to be_an(Integer)
		end

		it "has a pic url" do
			url = twitter_user.profile_image_url_https
			res = Net::HTTP.get_response(url)
			expect(res).to be_a(Net::HTTPSuccess)
		end
	end

	context 'there is no twitter_handle' do
		let(:influencer) { FactoryGirl.create(influencer_model.to_s.underscore.to_sym, twitter_handle: nil) }

		it "returns nil for number of followers" do
			expect(twitter_user.followers_count).to eql(nil)
		end

		it "returns nil for pic url" do
			expect(twitter_user.profile_image_url_https).to eql(nil)
		end
		
	end

end
