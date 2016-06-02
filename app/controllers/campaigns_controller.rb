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
    @i_name = "Donald the Duck"
    @smb = User.find(@campaign.user_id)
  end
end
