require 'faker'
FactoryGirl.define do
	factory :influencer do
		user
		short_bio Faker::Lorem.paragraph
		twitter_handle "MyString"
	end
end
