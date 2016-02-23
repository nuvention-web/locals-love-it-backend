require 'faker'

FactoryGirl.define do
	factory :industry do
		name Faker::Commerce.department

		factory :industry_with_influencers do
			after(:create) do |industry|
				FactoryGirl.create(:influencer, industries: [industry])
			end
		end

	end

end
