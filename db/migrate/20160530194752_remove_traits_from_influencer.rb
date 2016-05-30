class RemoveTraitsFromInfluencer < ActiveRecord::Migration
  def change
    remove_column :influencers, :traits, :string
  end
end
