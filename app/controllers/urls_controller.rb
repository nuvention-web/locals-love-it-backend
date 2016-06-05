require 'gchart'
require 'social_shares'
class UrlsController < ApplicationController


  def create
    if !params[:url].blank?
      client = Bitly.client
      @url = client.shorten(params[:url])
    end
  end

  def get_data
    #From Bitly
    client = Bitly.client
    u = params[:u]
      @url = client.clicks(u)
      @long_url = client.expand(u).long_url
      @clicks = @url.user_clicks
      @by_day = @url.clicks_by_day


      #### Clicks per Day Graph ####
      click_array = Hash.new
      click_data = Hash.new

      @by_day.each do |element|
        click_array[element.day_start] = rand(0...5)
        click_data[element.day_start] = element.clicks
      end


      #Test Data
       @click_data = click_array

       #Real Data
       #@click_data = click_data

      #### Social Shares Graph ####

      # Real Data
      #@fb_shares = SocialShares.facebook(u)
      #@pinterest_shares = SocialShares.pinterest(u)
      #@reddit_shares = SocialShares.reddit(u)
      #@linkedin_shares = SocialShares.linkedin(u)
      #@google_shares = SocialShares.google(u)

      #Test Data
      @fb_shares = 12
      @pinterest_shares = 5
      @reddit_shares = 3
      @linkedin_shares = 0
      @google_shares = 8

      #### Countries Graph ####
      country_hash = Hash.new
      @countries = @url.countries
      @url.countries.each do |element|
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
