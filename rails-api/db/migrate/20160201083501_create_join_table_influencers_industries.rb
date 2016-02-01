class CreateJoinTableInfluencersIndustries < ActiveRecord::Migration
  def change
    create_join_table :influencers, :industries do |t|
      t.index [:influencer_id, :industry_id]
      t.index [:industry_id, :influencer_id]
    end
  end
end
