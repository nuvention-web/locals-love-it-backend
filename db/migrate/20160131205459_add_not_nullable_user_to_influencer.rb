class AddNotNullableUserToInfluencer < ActiveRecord::Migration
  def change
	  change_column_null :influencers, :user_id, false
  end
end
