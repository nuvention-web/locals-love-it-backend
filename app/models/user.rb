class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_one :influencer, :dependent => :destroy
  enum role: [:admin, :influencer, :business_owner]
  validates :role, presence: true
end
