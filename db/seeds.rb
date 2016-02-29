require 'csv'

def seedInfluencers
	food_industry = FactoryGirl.build(:industry, name: 'Food') 
	food_industry.save! unless Industry.exists?(name: food_industry.name)

	puts Dir.pwd
	influencers_text = File.read('./data/influencers.csv');
	influencers = CSV.parse(influencers_text, headers: true);

	influencers.each do |influencer|
		unless influencer["Twitter Handle #1"].nil?
			u_name = influencer["Influencer Name"]	
			f_name = u_name.partition(" ").first
			l_name = u_name.partition(" ").last
			u = FactoryGirl.build(:user, role: :influencer, first_name: f_name, last_name: l_name) 
			u.save! unless User.exists?(u)

			bio = influencer["Bio"]
			t_h_with_symbol = influencer["Twitter Handle #1"].tr(' ', '')
			t_h = t_h_with_symbol.tr('@', '')

			i = FactoryGirl.build(:influencer, user: u, short_bio: bio, twitter_handle: t_h)
			i.save! unless Influencer.exists?(i)

			i.industries << food_industry

			puts i.inspect
		end

	end
end


if Rails.env.production?
else
	seedInfluencers
	User.create(email: "lli@u.northwestern.edu", last_name: 'LLI', password: 'password', role: :admin)
end
