class CreateInfluencers < ActiveRecord::Migration
  def change
    create_table :influencers do |t|
      t.references :user, index: true, foreign_key: true
      t.text :short_bio
      t.string :twitter_handle

      t.timestamps null: false
    end
  end
end
