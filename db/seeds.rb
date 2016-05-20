require 'csv'

def makePassword(f_name,l_name, u_id)
	name_part = ''
	p_word = ''
	puts f_name
	puts l_name
	puts u_id
	if not l_name.empty?
		name_part = f_name[0..2] + l_name[0..2]
		p_word = name_part + (f_name.length + l_name.length).to_s + u_id.to_s
	else
		name_part = f_name[0..5]
		p_word = name_part + (f_name.length).to_s + u_id.to_s
	end

	p_word
end

def isEmail(str)
	  not str.match(/@/).nil?
end

def seedInfluencers
	fashion_industry = FactoryGirl.build(:industry, name: 'Fashion')
	fashion_industry.save! unless Industry.exists?(name: fashion_industry.name)

	puts Dir.pwd
	influencers_text = File.read('./data/influencers.csv');
	influencers_text.encode!(universal_newline: true)
	influencers = CSV.parse(influencers_text, headers: true);

	influencers.each do |influencer|
		c = 1
		unless influencer["Twitter Handle #1"].nil?
			u_name = influencer["Influencer Name"]
			traits = influencer["Personality"]
			f_name = u_name.partition(" ").first
			l_name = u_name.partition(" ").last
			pword = makePassword(f_name, l_name, c)
			email = nil
			if not influencer["Contact Info"].nil?
				puts influencer["Contact Info"]
				puts isEmail(influencer["Contact Info"])
				email = isEmail(influencer["Contact Info"]) ? influencer["Contact Info"] : nil
			end
			if email.nil?
				u = FactoryGirl.build(:user, role: :influencer, first_name: f_name, last_name: l_name, password: pword, traits: traits)
			else
				u = FactoryGirl.build(:user, role: :influencer, first_name: f_name, last_name: l_name, password: pword, traits: traits, email: email)
			end

			puts pword
			puts email
			u.save! unless User.exists?(u)
			puts u.inspect

			bio = influencer["Bio"]
			t_h_with_symbol = influencer["Twitter Handle #1"].tr(' ', '')
			t_h = t_h_with_symbol.tr('@', '')

			i = FactoryGirl.build(:influencer, user: u, short_bio: bio, twitter_handle: t_h)
			i.save! unless Influencer.exists?(i)

			i.industries << fashion_industry

			puts i.inspect
			c = c + 1
		end

	end
end


if Rails.env.production?
else
	seedInfluencers
	User.create(email: "lli@u.northwestern.edu", last_name: 'LLI', password: 'password', role: :admin)
end
