require 'spec_helper'
require 'pry'

describe InfluencersController, type: :controller do
	describe 'GET index' do
		let!(:influencer0) { FactoryGirl.create(:influencer) }
		let!(:influencer1) { FactoryGirl.create(:influencer_with_industry) }

		it 'returns http success' do
			get :index
			expect(response).to be_success
		end

		it 'returns all the influencers' do
			get :index
			expect(assigns[:influencers]).to match_array([influencer0, influencer1])
		end

		describe 'influencers information' do
			it 'has a user_id for each influencer' do
				get :index
				binding.pry
				influencers = JSON.parse(response.body)["influencers"]
				
				influencers.each do |key, value|
					puts key
					puts value
				end
			end


			it 'has an industry for each influencer'

		end
	end
end
