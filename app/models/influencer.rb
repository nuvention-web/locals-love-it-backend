class Influencer < ActiveRecord::Base
  include Twitterable
  belongs_to :user
  validates :user, presence:true
  has_and_belongs_to_many :industries
  has_many :campaigns
end
