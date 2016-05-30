class RemoveTraitsFromUser < ActiveRecord::Migration
  def change
    remove_column :users, :traits, :string
  end
end
