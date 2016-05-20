class InfluencersSerializer < ActiveModel::Serializer
	attributes :user, :social_media_info, :short_bio, :traits
	has_many :industries


	def social_media_info
		fill_social_media_info
		{
			twitter_handle: twitter_handle,
			twitter_followers: twitter_followers,
			profile_pic: profile_pic,
			twitter_bio: twitter_bio,

		}
	end

	def short_bio
		if @instance_options[:is_single]
			object.short_bio
		end
	end

	def traits

		fill_traits_of_user
		{
			type_of_promotion: type_of_promotion,
			frequency: frequency,
			personality: personality,
		}

	end


	private

	def fill_traits_of_user
		@instance_options[:type_of_promotion] = ["Review", "Photo&Comment","Sale_ff"].sample
		@instance_options[:frequency] = ["One", "On-going"].sample
		@instance_options[:personality] = ["Quirky", "Witty", "Bubbly", "Sassy", "Conservative"].sample
	end

	def type_of_promotion
		@instance_options[:type_of_promotion]
	end

	def frequency
		@instance_options[:frequency]
	end

	def personality
		@instance_options[:personality]
	end

	def fill_social_media_info
		twitter_user = object.twitter_user
		@instance_options[:twitter_followers] = twitter_user.followers_count
		@instance_options[:profile_pic] = twitter_user.profile_image_url_https
		@instance_options[:twitter_bio] = twitter_user.description
	end



	def profile_pic
		@instance_options[:profile_pic]
	end

	def twitter_followers
		@instance_options[:twitter_followers]
	end

	def twitter_handle
		object.twitter_handle
	end

	def twitter_bio
		@instance_options[:twitter_bio]
	end

end
