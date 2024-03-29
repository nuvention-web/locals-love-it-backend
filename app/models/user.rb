class User < ActiveRecord::Base
	#include Mailboxer::Models::Messageable
	before_validation :set_role
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :timeoutable
  has_one :influencer, :dependent => :destroy
  enum role: [:admin, :influencer, :business_owner]
	has_many :campaigns
  validates :role, presence: true

	acts_as_messageable

	def set_role()
		self.role ||= :business_owner
	end

	def name
		self.first_name
	end

	def mailboxer_email(object)
		self.email
	end


end
