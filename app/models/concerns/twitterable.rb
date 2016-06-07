require 'twitter'

module Twitterable
	extend ActiveSupport::Concern

	class TwitterAPI
		def self.client
			@@client ||= Twitter::REST::Client.new do |config|
				config.consumer_key = ENV['TWITTER_CONSUMER_KEY']
  				config.consumer_secret = ENV['TWITTER_CONSUMER_SECRET']
  				config.access_token = ENV['TWITTER_ACCESS_TOKEN']
  				config.access_token_secret = ENV['TWITTER_ACCESS_SECRET']
			end
	
		end

	end

	class EmptyUser
		def followers_count
			nil
		end

		def profile_image_url_https
			nil
		end

		def description
			nil
		end
	end

	def twitter_user
		if twitter_handle
			TwitterAPI.client.user(twitter_handle)
		else
			EmptyUser.new
			
		end
	end

end

__END__
TODO: Remove this comment chunk
Everything from here on out is code written by Heather.
I will let her choose what code to delete. All sensisitve
info has been redacted.

#https://github.com/oauth-xx/oauth-ruby
#http://www.drcoen.com/2011/12/oauth-1-0-in-ruby-without-a-gem/
#https://dev.twitter.com/web/sign-in/implementing
#http://barkingiguana.com/2009/10/13/twitter-oauth-authentication-using-ruby/
#http://www.paulund.co.uk/using-the-new-twitter-api-v1-1

#We have our app set to READ_WRITE. For all the below, we only need READ privledges, 
#but if we move into letting the user make tweets later, we'll need READ_WRITE

# Get user Acess Token
def get_user__oath_serets(login, password)
	puts "implement me"
	oauth_token = nil
	oauth_token_secret = nil
	return oauth_token, oauth_token_secret
end

# Fetch a user access token 
def prepare_access_token(oauth_token, oauth_token_secret)
	consumer = OAuth::Consumer.new("REDACTED", "REDACTED", { :site => "https://api.twitter.com", :scheme => :header })
	token_hash = { :oauth_token => oauth_token, :oauth_token_secret => oauth_token_secret }
	access_token = OAuth::AccessToken.from_hash(consumer, token_hash )
	return access_token
end

# We probably don't need to be passing consumer key around - can we make this global somehow
# Fetches and prints some info about the user
def parse_user_response(consumer_key, access_token, http)
	# All requests will be sent to this server.
	baseurl = "https://api.twitter.com" 
	address = URI("#{baseurl}/1.1/account/verify_credentials.json")

	# Set up Net::HTTP to use SSL, which is required by Twitter.

	# Build the request and authorize it with OAuth.
	request = Net::HTTP::Get.new address.request_uri
	request.oauth! http, consumer_key, access_token

	# Issue the request and return the response.

	response = http.request request

  # Check for a successful request
  if response.code == '200'
    # Parse the response body, which is in JSON format.
    # ADD CODE TO PARSE THE RESPONSE BODY HERE
    user = JSON.parse(response.body)
    puts "Screen Name: #{user["screen_name"]}"
	puts "Name: #{user["name"]}"
	puts "Num Followers #{user["followers_count"]}"
	puts "Num Favorited #{user["favorite_count"]}"
	puts "Num Retweeted #{user["retweet_count"]}"
	puts
	return user

  else
  	http.finish
    # There was an error issuing the request.
    puts "Expected a response of 200 but got #{response.code} instead"
  end
end

#Returns the most recent user tweets
def getTimelime(screen_name, numberOfTweets, consumer_key, access_token, http)
	#Set up query
	baseurl = "https://api.twitter.com"
	path    = "/1.1/statuses/user_timeline.json"
	query   = URI.encode_www_form(
    	"screen_name" => screen_name,
    	"count" => numberOfTweets,
	)

	# Set up Net::HTTP to use SSL
	address = URI("#{baseurl}#{path}?#{query}")

	# Build the request and authorize it with OAuth.
	request = Net::HTTP::Get.new address.request_uri
	request.oauth! http, consumer_key, access_token

	# Issue the request and return the response.
	response = http.request request

	if response.code == '200' then
  		tweets = JSON.parse(response.body)
  		return tweets
  	else
  		# There was an error issuing the request.
    	puts "Expected a response of 200 but got #{response.code} instead"
	end
end


#given the most recent user tweets, prints them
def printTweets(tweets)
    tweets.each do |tweet|
        puts tweet["text"]
	end
end

# The consumer key identifies the application making the request.
# The access token identifies the user making the request.
consumer_key = OAuth::Consumer.new(
    "REDACTED",
    "REDACTED")

#This is the oath access token and oath access token secret of the account LLI is linked to
LLI_oauth_token  = "REDACTED"  
LLI_oath_token_secret = "REDACTED"  

def set_upHTTP()
	baseurl = "https://api.twitter.com"
	address = URI("#{baseurl}/1.1/account/verify_credentials.json")
	http = Net::HTTP.new address.host, address.port
	http.use_ssl = true
	http.verify_mode = OpenSSL::SSL::VERIFY_PEER
	http.start
	return http
end

http = set_upHTTP


#Get LLI Access Token
def autho(consumer_key, http)
	address = URI("https://api.twitter.com/oauth/authenticate")
end

access_token = prepare_access_token(LLI_oauth_token, LLI_oath_token_secret)

user = parse_user_response(consumer_key, access_token, http)

#tweets = getTimelime(user["screen_name"], 5, consumer_key, access_token, http)
printTweets(tweets)
