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

	it "has a first_name" do
		expect(FactoryGirl.build(:user, first_name: "Hank")).to be_valid
	end

	it "has a last_name" do
		expect(FactoryGirl.create(:user, last_name: "The Pug")).to be_valid
	end

	describe "Relationship With Influencer" do
		let(:new_user) { FactoryGirl.create(:user) }
		let!(:new_influencer) { FactoryGirl.create(:influencer, user: new_user) }

		it "destroys influencer when it is also destroyed" do
			expect(new_user.influencer).to eq(new_influencer)
			new_user.destroy!
			expect{Influencer.find(new_influencer)}.to raise_error(ActiveRecord::RecordNotFound)

		end

	end
		
end
