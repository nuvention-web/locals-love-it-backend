require 'spec_helper'
require 'pry'

describe Influencer, type: :model do
	it "has a valid factory" do
		expect(FactoryGirl.create(:influencer)).to be_valid
	end

	it "has role as influencer" do
		expect(FactoryGirl.build(:influencer).user.role).to eql('influencer')
	end

	it "Does not allow for influencer without User" do
		expect(FactoryGirl.build(:influencer, user: nil)).to_not be_valid
	end

	it "Allows for a twitter_handle" do
		expect(FactoryGirl.build(:influencer, twitter_handle: "helloworld")).to be_valid
	end
end
