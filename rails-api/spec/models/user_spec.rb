require 'spec_helper'

describe User, type: :model do
	it "has a valid factory" do
		expect(FactoryGirl.create(:user)).to be_valid
	end
	it "is invalid without an email" do
		expect(FactoryGirl.build(:user, email: nil)).to_not be_valid
	end

	it "is invalid without a password" do
		expect(FactoryGirl.build(:user, password: nil)).to_not be_valid
	end

	it "is invalid without a role" do
		expect(FactoryGirl.build(:user, role: nil)).to_not be_valid
	end

	it "has an access token after creation"
end
