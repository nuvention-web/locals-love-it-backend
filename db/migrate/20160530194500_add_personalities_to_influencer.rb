class AddPersonalitiesToInfluencer < ActiveRecord::Migration
  def change
    add_column :influencers, :personalities, :string
  end
end
