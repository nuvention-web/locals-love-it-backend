class AddTraitsToUser < ActiveRecord::Migration
  def change
    add_column :users, :traits, :string, null:false
  end
end