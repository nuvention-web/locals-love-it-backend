class InfluencersSerializer < ActiveModel::Serializer
	attributes :user, :social_media_info, :short_bio
	has_many :industries


	def social_media_info
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

	def profile_pic
		object.pic_url_from_twitter	
	end
	
	def twitter_followers
		object.num_followers_on_twitter
	end

	def twitter_handle
		object.twitter_handle
	end

end
