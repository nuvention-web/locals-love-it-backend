class CreateCampaigns < ActiveRecord::Migration
  def change
    create_table :campaigns do |t|
      t.string :link
      t.belongs_to :user, index: true
      t.belongs_to :influencer, index: true

      t.timestamps null: false
    end
  end
end
