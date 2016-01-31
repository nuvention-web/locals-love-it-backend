class Influencer < ActiveRecord::Base
  belongs_to :user
  validates :user, presence:true
end
