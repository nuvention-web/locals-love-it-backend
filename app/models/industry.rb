class Industry < ActiveRecord::Base
	validates :name, presence: true, uniqueness: { case_sensitive: false, message:"should have a unique name!" }
	has_and_belongs_to_many :influencers
end
