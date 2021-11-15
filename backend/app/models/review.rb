class Review < ApplicationRecord
  include ActionView::Helpers::DateHelper
  belongs_to :product
  belongs_to :user
  scope :get_reviews, ->(id) { where('product_id = ?', id) }

  def self.api_json(product_id)
    reviews = Review.get_reviews(product_id)
    reviews.map(&:as_json)
  end

  def as_json
    {
      id: id,
      title: title,
      content: content,
      rate: rate,
      time_ago: time_ago_in_words(created_at)
    }
  end
end
