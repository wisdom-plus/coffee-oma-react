class Like < ApplicationRecord

  belongs_to :user
  belongs_to :product
  counter_culture :product, column_name: 'likes_count'
end
