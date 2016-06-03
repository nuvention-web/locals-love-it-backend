require 'gchart'
require 'social_shares'
class CampaignsController < ApplicationController

  # GET /campaigns
  # campaigns/index.html.erb
  # displays all campaigns relevant to the user
  def index
    @campaigns = Campaign.where("user_id = ? OR influencer_id = ?", current_user.id, current_user.id)
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
      puts "HERE"
      puts click_array[element.day_start]
      click_data[element.day_start] = element.clicks
    end


    #Test Data
    puts @click_data
     @click_data = click_array
  end
end
