require 'rails_helper'

RSpec.describe Industry, type: :model do
	it "has a valid factory" do
		expect(FactoryGirl.create(:industry)).to be_valid
	end
	
	it "is invalid without a name" do
		expect(FactoryGirl.build(:industry, name: nil)).to_not be_valid
	end

	describe "Name of industry" do
		let(:industry_name) { "food" }
		let!(:food_industry) { FactoryGirl.create(:industry, name:"food") }

		it "has a unique name" do
			expect( FactoryGirl.build(:industry, name: industry_name) ).to_not be_valid
		end

		it "unique name regardless of case" do
			expect( FactoryGirl.build(:industry, name: industry_name.upcase) ).to_not be_valid
		end

		it "gives error for not-unique name" do
			already_created_industry = FactoryGirl.build(:industry, name: industry_name)
			expect{ already_created_industry.save!}.to raise_error.with_message(/Name should have a unique name!/)
		end

	end
end
