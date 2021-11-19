class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.references :user, foreign_key: :true, null: false,index: true
      t.references :product,foreign_key: :true,null: false,index: true
      t.text :title, null: false
      t.text :content, null: false
      t.float :rate, null: false
      t.timestamps
    end
  end
end
