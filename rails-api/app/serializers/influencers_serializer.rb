class InfluencersSerializer < ActiveModel::Serializer
	attributes :user, :social_media_info
	has_many :industries


	def social_media_info
		{
			twitter_handle: twitter_handle,
			twitter_followers: twitter_followers

		}
	end

	private
	
	def twitter_followers
		1 + rand(1000)
	end

	def twitter_handle
		object.twitter_handle
	end

end
