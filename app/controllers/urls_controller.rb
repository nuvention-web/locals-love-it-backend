class UrlsController < ApplicationController
  def new
    client = Bitly.client
    @url = client.clicks('http://bit.ly/24RaC4Q')
    @clicks = @url.user_clicks
    @by_day = @url.clicks_by_day
    @countries = @url.countries
    @referrers = @url.referrers
  end

  def create
    if !params[:url].blank?
      client = Bitly.client
      @url = client.shorten(params[:url])
    end
  end
end
