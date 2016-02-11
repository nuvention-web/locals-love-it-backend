class InfluencersSerializer < ActiveModel::Serializer
	attributes :user, :social_media_info, :short_bio
	has_many :industries


	def social_media_info
		fill_social_media_info
		{
			twitter_handle: twitter_handle,
			twitter_followers: twitter_followers,
			profile_pic: profile_pic,

		}
	end

	def short_bio
		if @instance_options[:is_single]
			object.short_bio
		end
	end

	private

	def fill_social_media_info
		twitter_user = object.twitter_user
		
		@instance_options[:twitter_followers] = twitter_user.followers_count
		@instance_options[:profile_pic] = twitter_user.profile_image_url_https
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

end
