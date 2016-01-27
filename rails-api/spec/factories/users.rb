require 'faker'

FactoryGirl.define do
	factory :user do
		sequence(:email) { |n| "person#{n}@example.com" } 
		password Faker::Internet.password(8, 16)
		role :admin 
	end
end
