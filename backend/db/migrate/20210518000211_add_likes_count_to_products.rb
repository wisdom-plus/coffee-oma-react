class AddLikesCountToProducts < ActiveRecord::Migration[6.1]
  def self.up
    add_column :products, :likes_count, :integer, null: false, default: 0
  end

  def self.down
    remove_column :products, :likes_count
  end
end
