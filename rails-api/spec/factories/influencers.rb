require 'faker'
FactoryGirl.define do
	factory :influencer do
		association :user, factory: :user, role: :influencer
		short_bio Faker::Lorem.paragraph
		twitter_handle "MyString"

		factory :influencer_with_industry do
			after(:create) do |influencer|
				create(:industry, influencers: [influencer])
			end
		end
	end
end
