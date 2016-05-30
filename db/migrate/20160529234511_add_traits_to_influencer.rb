class AddTraitsToInfluencer < ActiveRecord::Migration
  def change
    add_column :influencers, :trasits, :string, null:true
  end
end
