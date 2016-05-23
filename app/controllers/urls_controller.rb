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

      click_array = Array.new
      @by_day.each do |element|
        click_array.push(element.clicks)
      end
      @graph_url = Gchart.sparkline(:title => "Clicks per Day",
                               :data => click_array,
                               :bar_colors => "F04993",
      #@countries = @url.countries
      #@referrers = @url.referrers
      )

      #From Social Shares
      fb_shares = SocialShares.facebook(u)
      pinterest_shares = SocialShares.pinterest(u)
      reddit_shares = SocialShares.reddit(u)
      linkedin_shares = SocialShares.linkedin(u)
      google_shares = SocialShares.google(u)
      puts fb_shares
      puts pinterest_shares
  end
end
