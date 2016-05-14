class UrlsController < ApplicationController


  def create
    if !params[:url].blank?
      client = Bitly.client
      @url = client.shorten(params[:url])
    end
  end

  def get_data
    client = Bitly.client
    u = params[:u]
    puts u
      @url = client.clicks(u)
      @long_url = client.expand(u).long_url
      @clicks = @url.user_clicks
      @by_day = @url.clicks_by_day
      #@countries = @url.countries
      #@referrers = @url.referrers
  end
end
