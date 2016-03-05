require 'spec_helper'

xdescribe InfluencersController, type: :controller do
	let!(:influencer0) { FactoryGirl.create(:influencer) }
	let!(:influencer1) { FactoryGirl.create(:influencer_with_industry) }
	describe 'GET index' do

		it 'returns http success' do
			get :index
			expect(response).to be_success
		end

		it 'returns all the influencers' do
			get :index
			expect(assigns[:influencers]).to match_array([influencer0, influencer1])
		end

		it 'follows json api format and uses serializer' do
			get :index
			expect{JSON.parse(response.body)["influencers"]}.to_not raise_error
		end

		it 'does not have a short_bios' do
			get :index
			expect(JSON.parse(response.body)["influencers"].first["short_bio"]).to eql(nil)
		end

	end

	describe 'GET /# show' do
		subject(:influencer) {JSON.parse(response.body)["influencer"]}

		it 'returns http success' do
			get :show, id: influencer0.id
			expect(response).to be_success
		end

		it 'returns a single influencer, given an id' do
			get :show, id: influencer0.id
			expect(assigns[:influencer]).to match(influencer0)
		end

		it 'follows json api format and uses serializer' do
			get :show, id: influencer0.id
			expect{JSON.parse(response.body)["influencer"]}.to_not raise_error
		end

		it 'does not have a short_bios' do
			get :show, id: influencer0.id
			expect(JSON.parse(response.body)["influencer"]["short_bio"]).to eql(influencer0.short_bio)
		end

		context 'there exists more than one' do
			
			it 'returns influencer by specific id' do
				get :show, id: influencer1.id
				expect(assigns[:influencer]).to_not match(influencer0)
				expect(assigns[:influencer]).to match(influencer1)
			end
		end

	end
end
