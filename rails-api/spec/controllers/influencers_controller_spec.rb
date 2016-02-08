require 'spec_helper'
require 'pry'

describe InfluencersController, type: :controller do
	describe 'GET index' do
		let!(:influencer0) { FactoryGirl.create(:influencer) }
		let!(:influencer1) { FactoryGirl.create(:influencer_with_industry) }

		before(:each) do
			get :index
		end

		it 'returns http success' do
			expect(response).to be_success
		end

		it 'returns all the influencers' do
			expect(assigns[:influencers]).to match_array([influencer0, influencer1])
		end

		it 'follows json api format and uses serializer' do
			expect{JSON.parse(response.body)["influencers"]}.to_not raise_error
		end

	end

	describe 'GET /# show' do
		let!(:influencer0) { FactoryGirl.create(:influencer) }
		let!(:influencer1) { FactoryGirl.create(:influencer_with_industry) }

		it 'returns http success' do
			get :show, id: influencer0.id
			expect(response).to be_success
		end

		it 'returns a single influencer, given an id' do
			get :show, id: influencer0.id
			expect(assigns[:influencer]).to match(influencer0)
		end

		it 'follows json api format and uses serializer' do
			expect{JSON.parse(response.body)["influencer"]}.to_not raise_error
		end

	end
end
