require 'faker'

FactoryGirl.define do
	factory :user do
		sequence(:email) { |n| "person#{n}@example.com" } 
		password Faker::Internet.password(8, 16)
		role :admin 
		first_name Faker::Name.first_name
		last_name Faker::Name.last_name
	end
end
