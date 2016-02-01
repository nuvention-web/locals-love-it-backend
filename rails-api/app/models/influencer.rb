class Influencer < ActiveRecord::Base
  belongs_to :user
  validates :user, presence:true
  has_and_belongs_to_many :industries
end
