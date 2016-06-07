require 'gchart'
require 'social_shares'
class CampaignsController < ApplicationController

  # GET /campaigns
  # campaigns/index.html.erb
  # displays all campaigns relevant to the user
  def index
    @campaigns = Campaign.where("user_id = ? OR influencer_id = ?", current_user.id, current_user.id)
  end

  def create

    c = Campaign.new
    c.user_id = current_user.id
    c.link = client.shorten(params[:url])
    c.influencer_id = params[:id]
    c.name = params[:campaign_name]
    c.save

  end


  def show
    @campaign = Campaign.find(params[:id])
    #@i = Influencer.find(@campaign.influencer_id)
    @i_name = "Influencer Name"
    @smb = User.find(@campaign.user_id)

    ##Bitly Jawn
    client = Bitly.client
    @link = client.expand(@campaign.link)
    @clicks = @link.user_clicks()
    @long_url = @link.long_url()

    #puts @link.countries()
    #puts @link.global_clicks()#this is the total count of clicks to all Bitlinks that point to the same same long url
    #puts @link.user_clicks() #this is the total count of clicks to this user's Bitlink

    #### Clicks per Day Graph ####
    click_array = Hash.new
    click_data = Hash.new

    @link.clicks_by_day().each do |element|
      click_array[element.day_start] = rand(0...5)
      puts click_array[element.day_start]
      click_data[element.day_start] = element.clicks
    end

    #Test Data
     @click_data = click_array


     # Real Data
     #@fb_shares = SocialShares.facebook(@campaign.link)
     #@pinterest_shares = SocialShares.pinterest(@campaign.link)
     #@reddit_shares = SocialShares.reddit(@campaign.link)
     #@linkedin_shares = SocialShares.linkedin(@campaign.link)
     #@@google_shares = SocialShares.google(@campaign.link)

     #Test Data
     @fb_shares = 12
     @pinterest_shares = 5
     @reddit_shares = 3
     @linkedin_shares = 0
     @google_shares = 8


     #### Countries Graph ####
     country_hash = Hash.new
     @link.countries().each do |element|
       country_hash[element.country] = element.clicks
       puts element.country
       puts element.clicks
     end
     #Real Data
     #@countries = country_hash

     #Test Data
     @countries = {"US" => 12, "China" =>5, "Canada" => 8, "France" => 10}
  end
end
