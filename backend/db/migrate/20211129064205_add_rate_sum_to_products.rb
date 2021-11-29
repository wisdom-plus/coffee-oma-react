class AddRateSumToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :rate_sum, :integer, null: false, default: 0
  end
end
