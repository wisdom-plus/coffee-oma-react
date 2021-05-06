class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :price
      t.text :caption
      t.text :url
      t.text :image
      t.string :shopname
      t.timestamps
    end
  end
end
