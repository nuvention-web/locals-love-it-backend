require 'spec_helper'

describe User, type: :model do
	it "has a valid factory"
	it "is invalid without an email"
	it "is invalid without a password"
	it "is invalid without a role"
	it "has an access token after creation"
end
