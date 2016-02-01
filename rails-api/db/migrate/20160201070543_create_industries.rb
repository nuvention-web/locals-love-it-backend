class CreateIndustries < ActiveRecord::Migration
	def change
		create_table :industries do |t|
			t.string :name, null: false	
			t.timestamps null: false
		end

		add_index :industries, :name, unique: true
	end
end
