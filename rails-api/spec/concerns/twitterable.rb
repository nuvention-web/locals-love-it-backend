require 'spec_helper'

shared_examples_for "twitterable" do	
	let(:influencer_model) { described_class } # the class that includes this concern
	let(:influencer) { FactoryGirl.create(influencer_model.to_s.underscore.to_sym, twitter_handle: []) }

	it "returns number of followers on twitter" do
		expect(influencer.num_followers_on_twitter).to be_an(Integer)
	end

	it "returns the url for twitter profile pic" do
		expect(influencer.pic_url_from_twitter).to be_a(String)
	end

end
