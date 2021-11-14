class Review < ApplicationRecord
  belongs_to :product
  belongs_to :user
  scope :get_reviews, ->(id) { where('product_id = ?', id) }
end
