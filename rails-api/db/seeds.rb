if Rails.env.production?
else
	require 'faker'

	User.create(email: "lli@u.northwestern.edu", last_name: 'LLI', password: 'password', role: :admin)
end
