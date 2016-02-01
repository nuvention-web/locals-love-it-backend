require 'spec_helper'

describe "Influencers and Industries relationship" do
	let(:influencer0) {FactoryGirl.create(:influencer_with_industry)}
	let(:influencer1) {FactoryGirl.create(:influencer)}
	let(:industry0) {FactoryGirl.create(:industry_with_influencers)}
	let(:industry1) {FactoryGirl.create(:industry, name: "unique name")}

	it "has influencer factories with industries" do
		expect(influencer0.industries.count).to eq(1)
	end

	it "has valid influencer without any industries" do
		expect(influencer1.industries.count).to eq(0)
	end

	it "has industry factories with default influencers" do
		expect(industry0.influencers.count).to eq(1)
	end

	it "has valid industries without any influencers" do
		expect(industry1.influencers.count).to eq(0)
	end

	it "should handle influencer with an industry" do
		influencer1.industries << industry1
		expect(influencer1.industries.count).to eq(1)
		expect(influencer1.industries).to eq([industry1])
	end

	it "should automatically know an industry's influencers" do
		influencer1.industries << industry1
		expect(industry1.influencers.count).to eq(1)
		expect(industry1.influencers).to eq([influencer1])
	end

	it "should handle an industry with multiple influencers" do
		shared_industry = industry1
		influencer0.industries << shared_industry
		influencer1.industries << shared_industry
		expect(shared_industry.influencers.count).to eq(2)
	end

	it "should handle an influencer with multiple industries" do
		hard_working_influencer = influencer1
		industry0.influencers << hard_working_influencer
		industry1.influencers << hard_working_influencer
		expect(hard_working_influencer.industries.count).to eq(2)
	end

end
