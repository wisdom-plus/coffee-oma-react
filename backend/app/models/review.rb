class Review < ApplicationRecord
  include ActionView::Helpers::DateHelper
  belongs_to :product
  belongs_to :user
  validates :title, :content, :user_id, :product_id, presence: true
  validates :rate, numericality: {
    greater_than_or_equal_to: 1,
    less_than_or_equal_to: 5
  }, presence: true

  counter_culture :product
  counter_culture :product, column_name: 'rate_sum', delta_column: 'rate'

  scope :get_reviews, ->(id) { where(product_id: id) }

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
      time_ago: time_ago_in_words(created_at),
      user_id: user_id
    }
  end
end
