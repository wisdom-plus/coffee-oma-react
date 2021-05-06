class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.text :url
      t.string :shopname
      t.integer :price
      t.text :caption
      t.text :image
      t.timestamps
    end
  end
end
